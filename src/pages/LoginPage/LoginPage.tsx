import {
    LoginPageStyle,
    HeaderContainer,
    ContentContainer,
    Title,
    ButtonContainer,
    TextFieldContainer,
} from "./LoginPage.style"
import { useState } from 'react';
import Button from '@/components/Button';
import Header from '@/components/Header';
import TextField  from '@/components/TextField';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/api/endpoints/auth/login';
import { useNavigate } from 'react-router-dom';

const LoginPage = () =>{
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const loginMutation = useMutation({
        mutationFn: () => login(userId, password),
        onSuccess: (data) => {
            // console.log('로그인 성공:', data);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            navigate('/');
        },
        onError: (error) => {
            console.error('로그인 실패:', error);
        }
    });

    const handleLogin = () => {
        loginMutation.mutate();
    }
    
    return (
        <LoginPageStyle>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <ContentContainer>
                <Title>로그인</Title>
                <TextFieldContainer>
                    <TextField title="이메일" description="이메일을 입력해주세요." value={userId} onChange={(e) => setUserId(e.target.value)}/>
                    <TextField title="비밀번호" description="비밀번호를 입력해주세요." value={password} onChange={(e) => setPassword(e.target.value)}/>
                </TextFieldContainer>
                <ButtonContainer>
                    <Button 
                        text="로그인" 
                        size="MEDIUM" 
                        onClick={handleLogin}
                        disabled={loginMutation.isPending} 
                    />
                </ButtonContainer>
            </ContentContainer>
        </LoginPageStyle>
    )
}

export default LoginPage;