import {
    HomePageStyle,
    HeaderContainer,
    ContentContainer,
    Title,
    Description,
    ButtonContainer,
    LoadingContainer,
    LoadingSpinner,
    LoadingText,    
} from "./HomePage.style"
import Button from '@/components/Button';
import Header from '@/components/Header';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useMutation } from "@tanstack/react-query";
import { getMemberInfo } from '@/api/endpoints/auth/member';
const HomePage = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [isVelogLinked, setIsVelogLinked] = useState(false);
    const [userName, setUserName] = useState('');

    
    const checkVelogLinkMutation = useMutation({
        mutationFn: () => getMemberInfo(),
        onSuccess: (data) => {
            //console.log(data);
            if(data.velogAccessToken && data.velogRefreshToken) {
                setUserName(data.userId);
                setIsVelogLinked(true);
            }
            setIsLoading(false);
        },
        onError: (error) => {
            console.error('Velog 연동 체크 실패:', error);
            setIsLoading(false);
        }
    });
    

    useEffect(() => {
        const init = async () => {
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');
            if (accessToken && refreshToken) {
                setIsLogin(true);
                await checkVelogLinkMutation.mutateAsync();
            } else {
                setIsLoading(false);
            }
        };
        
        init();
    }, []);

    const handleLogin = () => {
        navigate('/login');
    }

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsLogin(false);
        setIsVelogLinked(false);
        navigate('/');
    }

    const handleLinkVelog = () => {
        navigate('/velog');
    }

    const handleStart = () => {
        navigate('/dashboard');
    }

    if (isLoading) {
        return (
            <LoadingContainer>
                <LoadingSpinner />
                <LoadingText>잠시만 기다려주세요...</LoadingText>
            </LoadingContainer>
        );
    }

    return (
        <HomePageStyle>
            <HeaderContainer>
                <Header rightComponent={
                    <Button text= {
                        isVelogLinked ? 
                            '로그아웃' : 
                        isLogin ? 
                            '로그아웃' 
                            : '로그인'
                        } 
                        size="SMALL" 
                        onClick={
                        isVelogLinked ? 
                            handleLogout 
                        : isLogin ? 
                            handleLogout 
                            : handleLogin} />
                } />
            </HeaderContainer>
            <ContentContainer>
                <Title>{isVelogLinked ? '안녕하세요! ' + userName + '님' : isLogin ? '안녕하세요!' : 'Reviee에 오신 것을 환영합니다!'}</Title>
                <Description>
                    {isVelogLinked ? <>이제 REVIEE를 이용해보세요<br/> REVIEE가 VELOG에 정리해서 올려드릴게요</> : 
                    isLogin ? <>Velog를 연동해주세요! <br/> REVIEE가 VELOG에 정리해서 올려드릴게요</> : <>오늘 공부하신 내용을 작성하면 <br/> REVIEE가 VELOG에 정리해서 올려드릴게요</>}</Description>
                <ButtonContainer>
                    <Button text={isVelogLinked ? "시작하기" : isLogin ? "Velog 연동하기" : "로그인하기"} size="MEDIUM" onClick={isVelogLinked ? handleStart : isLogin ? handleLinkVelog : handleLogin} />
                </ButtonContainer>
            </ContentContainer>
        </HomePageStyle>
    )
}

export default HomePage;