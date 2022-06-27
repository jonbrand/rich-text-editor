import { CustomEditor } from '../Editor/Editor';
import { Bold } from '../Bold/Bold';
import { NavbarContainer, LogoWrapper, Logo, LogoText, ButtonsWrapper } from './styles';
import logo from '../../images/logo.png'

export const Toolbar = ({ editor }) => {
  return(
    <NavbarContainer>
        <LogoWrapper>
          <Logo src={logo} />
          <LogoText>Rich Editor</LogoText>
        </LogoWrapper>
        <ButtonsWrapper>
          <Bold editor={editor} />
          <button
            onMouseDown={e => {
              e.preventDefault()
              CustomEditor.toggleCodeBlock(editor)
            }}
          >
            Code Block
          </button>
        </ButtonsWrapper>
      </NavbarContainer>
  )
}