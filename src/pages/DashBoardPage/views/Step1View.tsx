import { Title, SubTitle, TextFieldContainer, ButtonContainer } from "../DashBoardPage.style";
import { StepIndicator } from "./StepIndicator";
import TextField from '@/components/TextField';
import Button from '@/components/Button';

interface Step1ViewProps {
    title: string;
    setTitle: (value: string) => void;
    content: string;
    setContent: (value: string) => void;
    handleNext: () => void;
}

export const Step1View = ({ 
    title, 
    setTitle, 
    content, 
    setContent, 
    handleNext 
}: Step1ViewProps) => (
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
                height="120px"
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