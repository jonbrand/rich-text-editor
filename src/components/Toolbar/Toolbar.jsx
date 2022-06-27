import { Bold } from '../Bold/Bold';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { NavbarContainer, LogoWrapper, Logo, LogoText, ButtonsWrapper } from './styles';
import logo from '../../images/logo.png';

export const Toolbar = ({ editor }) => {
  console.log(editor)
  return(
    <NavbarContainer>
        <LogoWrapper>
          <Logo src={logo} />
          <LogoText>Rich Editor</LogoText>
        </LogoWrapper>
        <ButtonsWrapper>
          <Bold editor={editor} />
          <CodeBlock />
        </ButtonsWrapper>
      </NavbarContainer>
  )
}