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

const HomePage = () =>{
    return (
        <HomePageStyle>
            <HeaderContainer>
                <Header rightComponent={<Button text="로그인" size="SMALL" />} />
            </HeaderContainer>
            <ContentContainer>
                <Title>오늘 나의 코드</Title>
                <Description>오늘 공부하신 내용을 작성하면 <br/> REVIEE가 VELOG에 정리해서 올려드릴게요</Description>
                <ButtonContainer>
                    <Button text="시작하기" size="MEDIUM" />
                </ButtonContainer>
            </ContentContainer>
        </HomePageStyle>
    )
}

export default HomePage;