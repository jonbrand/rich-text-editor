import { Bold } from '../Bold/Bold';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { Italic } from '../Italic/Italic';
import { Underline } from '../Underline/Underline';
import { NavbarContainer, LogoWrapper, Logo, LogoText, ButtonsWrapper } from './styles';
import logo from '../../images/logo.png';

export const Toolbar = ({ editor }) => {
  return(
    <NavbarContainer>
        <LogoWrapper>
          <Logo src={logo} />
          <LogoText>Rich Editor</LogoText>
        </LogoWrapper>
        <ButtonsWrapper>
          <Bold editor={editor} />
          <Italic editor={editor} />
          <Underline editor={editor} />
          <CodeBlock editor={editor} />
        </ButtonsWrapper>
      </NavbarContainer>
  )
}