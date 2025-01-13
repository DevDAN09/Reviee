import { HeaderContainer, Logo } from './Header.style';
import logo from '@/assets/images/logo.svg';
import { memo } from 'react';

interface HeaderProps {
  rightComponent?: React.ReactNode;
}

const Header = memo(({ rightComponent }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Logo 
        src={logo} 
        alt="logo" 
        loading="lazy"
        width="120"
        height="40"
      />
      {rightComponent}
    </HeaderContainer>
  );
});

export default Header;