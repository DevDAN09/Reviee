import { Title, SubTitle, Description, TextFieldContainer, ButtonContainer } from "../DashBoardPage.style";
import { StepIndicator } from "./StepIndicator";
import TextField from '@/components/TextField';
import Button from '@/components/Button';

interface Step2ViewProps {
    code: string;
    setCode: (value: string) => void;
    handleRequest: () => void;
    isPending: boolean;
}

export const Step2View = ({ code, setCode, handleRequest, isPending }: Step2ViewProps) => (
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