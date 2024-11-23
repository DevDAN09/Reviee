import {
    VelogPageStyle,
    HeaderContainer,
    ContentContainer,
    Title,
    SubTitle,
    Description,
    ButtonContainer,
    TextFieldContainer,
    StepIndicatorContainer,
    BackButton,
    MarkdownWrapper,
    DescriptionContainer,
    FloatingToggleButton,
    EditorContainer,
    StepDescription,
} from "./DashBoardPage.style"
import { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import TextField  from '@/components/TextField';
import { useMutation } from '@tanstack/react-query';
import { gptRequest } from '@/api/endpoints/gpt/request';
import { useNavigate } from 'react-router-dom';
import backIcon from '@/assets/icons/back.svg';
import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { velogPost } from '@/api/endpoints/blog/velog-post';
import MDEditor from '@uiw/react-md-editor';

interface CodeViewProps {
    code: string;
    setCode: (value: string) => void;
    handleRequest: () => void;
    isPending: boolean;
}

interface SuccessViewProps {
    markdown: string;
    handleVelogPost: () => void;
    setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

interface StepIndicatorProps {
    currentStep: number;
}



const SuccessView = ({ markdown, handleVelogPost, setMarkdown }: SuccessViewProps) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <Title>완료되었습니다!</Title>
            <DescriptionContainer>
                <Description>아래 완성된 내용을 확인하세요</Description>
            </DescriptionContainer>
            <MarkdownWrapper isEditing={isEditing}>
                <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw, rehypeHighlight]}
                    >
                        {markdown}
                    </ReactMarkdown>
            </MarkdownWrapper>
            <FloatingToggleButton 
                onClick={() => setIsEditing(!isEditing)}
                isActive={isEditing}
            >
                {isEditing ? '완료' : '수정하기'}
            </FloatingToggleButton>
            <EditorContainer>
                {isEditing && (
                <MDEditor
                    value={markdown}
                        onChange={(value) => setMarkdown(value || '')}
                        preview="edit"
                        height={500}
                />
            )}
            </EditorContainer>
            <ButtonContainer>
                <Button 
                    text="Velog 글 작성하기" 
                    size="MEDIUM" 
                    onClick={handleVelogPost}
                />
            </ButtonContainer>
        </>
    );
};

const Step1View = ({ 
    title, 
    setTitle, 
    content, 
    setContent, 
    handleNext 
}: {
    title: string;
    setTitle: (value: string) => void;
    content: string;
    setContent: (value: string) => void;
    handleNext: () => void;
}) => (
    <>  
        <StepIndicator currentStep={1} />
        <Title>Velog 글 정보 작성하기</Title>
        <SubTitle>글의 제목을 작성해주세요.</SubTitle>
        <TextFieldContainer>
            <TextField 
                description="예시) SpringBoot 효율적인 Null 체크" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
        </TextFieldContainer>
        <SubTitle>공부한 내용에 대해서 설명해주세요.</SubTitle>
        <TextFieldContainer>
            <TextField 
                description="예시) SpringBoot를 사용하면서 Null 체크는 필수적인 작업이다..." 
                value={content} 
                onChange={(e) => setContent(e.target.value)}
            />
        </TextFieldContainer>
        <ButtonContainer>
            <Button 
                text="다음" 
                size="MEDIUM" 
                onClick={handleNext}
                disabled={!title.trim() || !content.trim()}
            />
        </ButtonContainer>
    </>
);

const Step2View = ({ code, setCode, handleRequest, isPending }: CodeViewProps) => (
    <>
        <StepIndicator currentStep={2} />
        <Title>코드 입력</Title>
        <SubTitle>추가로 작성한 코드가 있다면 작성해주세요</SubTitle>
        <Description>REVIEE가 코드를 기반으로 공부한 내용을 정리할거에요!</Description>
        <TextFieldContainer>
            <TextField 
                description="printf('Hello, World!');" 
                value={code} 
                onChange={(e) => setCode(e.target.value)}
            />
        </TextFieldContainer>
        <ButtonContainer>
            <Button 
                text="정리하기" 
                size="MEDIUM" 
                onClick={handleRequest}
                disabled={isPending} 
            />
        </ButtonContainer>
    </>
);

export const StepIndicator = ({ currentStep }: StepIndicatorProps) => (
    <StepIndicatorContainer>
        <StepDescription>Step {currentStep}/2</StepDescription>
    </StepIndicatorContainer>
);

const DashBoardPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [code, setCode] = useState('');
    const [isGptRequestSent, setIsGptRequestSent] = useState(false);
    const [markdown, setMarkdown] = useState('');
    const navigate = useNavigate();

    const gptRequestMutation = useMutation({
        mutationFn: () => gptRequest(title, content, code),
        onSuccess: (data) => {
            setIsGptRequestSent(true);
            setMarkdown(data);
        },
        onError: (error) => {
            console.error('요청 실패:', error);
        }
    });

    const velogPostMutation = useMutation({
        mutationFn: () => velogPost(title, markdown),
        onSuccess: (data) => {
            window.open(data.postUrl, '_blank');
        },
        onError: (error) => {
            console.error('요청 실패:', error);
        }
    });

    const handleNext = () => {
        setCurrentStep(prev => prev + 1);
    }

    const handleRequest = () => {
        //gptRequestMutation.mutate();
        setIsGptRequestSent(true);
    }

    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
        
        if(currentStep === 1) navigate('/');
    }

    const handleVelogPost = () => {
        velogPostMutation.mutate();
    }

    const renderStep = () => {
        if (isGptRequestSent) {
            return <SuccessView markdown={markdown} handleVelogPost={handleVelogPost} setMarkdown={setMarkdown} />;
        }

        switch (currentStep) {
            case 1:
                return <Step1View 
                    title={title} 
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                    handleNext={handleNext}
                />;
            case 2:
                return <Step2View 
                    code={code}
                    setCode={setCode}
                    handleRequest={handleRequest}
                    isPending={gptRequestMutation.isPending}
                />;
            default:
                return null;
        }
    };

    return (
        <VelogPageStyle>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <BackButton src={backIcon} onClick={handleBack}/>
            <ContentContainer>
                {renderStep()}
            </ContentContainer>
        </VelogPageStyle>
    );
}

export default DashBoardPage;