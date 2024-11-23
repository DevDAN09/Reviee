import { HeaderContainer, Logo } from './Header.style';
import logo from '@/assets/images/logo.svg';

interface HeaderProps {
  rightComponent?: React.ReactNode;
}

const Header = ({ rightComponent }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      {rightComponent}
    </HeaderContainer>
  );
};

export default Header;