import { CustomEditor } from '../Editor/Editor'
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
          <button
            onMouseDown={e => {
              e.preventDefault()
              CustomEditor.toggleBoldMark(editor)
            }}
          >
            Bold
          </button>
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