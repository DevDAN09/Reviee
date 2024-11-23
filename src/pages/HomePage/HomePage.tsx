import {
    HomePageStyle,
    HeaderContainer,
    ContentContainer,
    Title,
    Description,
    ButtonContainer,
} from "./HomePage.style"
import Button from '@/components/Button';
import Header from '@/components/Header';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const HomePage = () =>{
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken && refreshToken) {
            setIsLogin(true);
        }
    }, []);

    const handleLogin = () => {
        navigate('/login');
    }

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsLogin(false);
    }

    const handleStart = () => {
        navigate('/velog');
    }

    return (
        <HomePageStyle>
            <HeaderContainer>
                <Header rightComponent={
                    <Button text= {isLogin ? '로그아웃' : '로그인'} size="SMALL" onClick={isLogin ? handleLogout : handleLogin} />
                    
                } />
            </HeaderContainer>
            <ContentContainer>
                <Title>오늘 나의 코드</Title>
                <Description>{isLogin ? <>Velog를 연동해주세요! <br/> REVIEE가 VELOG에 정리해서 올려드릴게요</> : <>오늘 공부하신 내용을 작성하면 <br/> REVIEE가 VELOG에 정리해서 올려드릴게요</>}</Description>
                <ButtonContainer>
                    <Button text={isLogin ? "Velog 연동하기" : "시작하기"} size="MEDIUM" onClick={isLogin ?  handleStart: handleLogin} />
                </ButtonContainer>
            </ContentContainer>
        </HomePageStyle>
    )
}

export default HomePage;