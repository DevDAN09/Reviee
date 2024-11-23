import { useState } from 'react';
import { Title, Description, DescriptionContainer, MarkdownWrapper, FloatingToggleButton, EditorContainer, ButtonContainer, MDEditorWrapper } from "../DashBoardPage.style";
import Button from '@/components/Button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from "rehype-highlight";
import MDEditor from '@uiw/react-md-editor';

interface SuccessViewProps {
    markdown: string;
    handleVelogPost: () => void;
    setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

export const SuccessView = ({ markdown, handleVelogPost, setMarkdown }: SuccessViewProps) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <Title>완료되었습니다!</Title>
            <FloatingToggleButton 
                onClick={() => setIsEditing(!isEditing)}
                isActive={isEditing}
            >
                {isEditing ? '완료' : '수정하기'}
            </FloatingToggleButton>
            <DescriptionContainer>
                <Description>아래 완성내용을 확인하세요</Description>
            </DescriptionContainer>
            <MarkdownWrapper isEditing={isEditing}>
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                >
                    {markdown}
                </ReactMarkdown>
            </MarkdownWrapper>
            <EditorContainer>
                {isEditing && (
                    <MDEditorWrapper>
                                            <MDEditor
                        value={markdown}
                        onChange={(value) => setMarkdown(value || '')}
                        preview="edit"
                        height={500}
                    />
                    </MDEditorWrapper>
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