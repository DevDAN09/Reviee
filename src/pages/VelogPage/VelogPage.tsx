import {
    VelogPageStyle,
    HeaderContainer,
    ContentContainer,
    Title,
    SubTitle,
    Description,
    ButtonContainer,
    TextFieldContainer,
} from "./VelogPage.style"
import { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import TextField  from '@/components/TextField';
import { useMutation } from '@tanstack/react-query';
import { sendVelogAuthEmail } from '@/api/endpoints/auth/link-velog-1';
import { sendVelogAuthLink } from '@/api/endpoints/auth/link-velog-2';
import { useNavigate } from 'react-router-dom';

interface EmailViewProps {
    email: string;
    setEmail: (value: string) => void;
    handleSendEmail: () => void;
    isPending: boolean;
}

interface AuthLinkViewProps {
    authLink: string;
    setAuthLink: (value: string) => void;
    handleAuthLink: () => void;
    isPending: boolean;
}

interface SuccessViewProps {
    navigate: (path: string) => void;
}

const SuccessView = ({ navigate }: SuccessViewProps) => (
    <>
        <Title>Velog 연동 완료</Title>
        <SubTitle>Velog 연동이 완료되었습니다</SubTitle>
        <Description>이제 REVIEE를 시작해보세요!</Description>
        <ButtonContainer>
            <Button 
                text="시작하기" 
                size="MEDIUM" 
                onClick={() => navigate('/')} 
            />
        </ButtonContainer>
    </>
);

const AuthLinkView = ({ authLink, setAuthLink, handleAuthLink, isPending }: AuthLinkViewProps) => (
    <>
        <Title>Velog 연동</Title>
        <SubTitle>인증 메일의 링크를 복사해서 붙여넣어주세요</SubTitle>
        <Description>메일의 링크를 접속하지 말고 아래에 넣어주세요</Description>
        <TextFieldContainer>
            <TextField 
                description="https://velog.io/email-login?code=..." 
                value={authLink} 
                onChange={(e) => setAuthLink(e.target.value)}
            />
        </TextFieldContainer>
        <ButtonContainer>
            <Button 
                text="인증하기" 
                size="MEDIUM" 
                onClick={handleAuthLink}
                disabled={isPending} 
            />
        </ButtonContainer>
    </>
);

const EmailView = ({ email, setEmail, handleSendEmail, isPending }: EmailViewProps) => (
    <>
        <Title>Velog 연동</Title>
        <SubTitle>사용하시는 Velog계정의 이메일을 입력해주세요</SubTitle>
        <Description>해당 링크로 인증링크가 전송될 예정이에요</Description>
        <TextFieldContainer>
            <TextField 
                description="사용하시는 velog 이메일을 입력해주세요." 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
        </TextFieldContainer>
        <ButtonContainer>
            <Button 
                text="인증링크 받기" 
                size="MEDIUM" 
                onClick={handleSendEmail}
                disabled={isPending} 
            />
        </ButtonContainer>
    </>
);

const VelogPage = () =>{
    const [email, setEmail] = useState('');
    const [authLink, setAuthLink] = useState('');
    const [isEmailReceived, setIsEmailReceived] = useState(false);
    const [isAuthLinkSent, setIsAuthLinkSent] = useState(false);
    const navigate = useNavigate();

    const sendEmailMutation = useMutation({
        mutationFn: () => sendVelogAuthEmail(email),
        onSuccess: (data) => {
            // console.log('로그인 성공:', data);
            setIsEmailReceived(true);
        },
        onError: (error) => {
            console.error('로그인 실패:', error);
        }
    });

    const authLinkMutation = useMutation({
        mutationFn: () => sendVelogAuthLink(authLink),
        onSuccess: (data) => {
            //console.log('로그인 성공:', data);
            setIsAuthLinkSent(true);
        },
        onError: (error) => {
            console.error('로그인 실패:', error);
        }
    });

    const handleSendEmail = () => {
        sendEmailMutation.mutate();
    }

    const handleAuthLink = () => {
        authLinkMutation.mutate();
    }

    const emailProps = {
        email,
        setEmail,
        handleSendEmail,
        isPending: sendEmailMutation.isPending
    };

    const authLinkProps = {
        authLink,
        setAuthLink,
        handleAuthLink,
        isPending: authLinkMutation.isPending
    };

    return (
        <VelogPageStyle>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <ContentContainer>
                {isAuthLinkSent ? <SuccessView navigate={navigate} /> : 
                 isEmailReceived ? <AuthLinkView {...authLinkProps} /> : 
                                 <EmailView {...emailProps} />}
            </ContentContainer>
        </VelogPageStyle>
    )
}

export default VelogPage;