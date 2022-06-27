import { Button, NavBtn } from './styles';
import { CustomEditor } from '../Editor/Editor';

export const Underline = ({ editor }) => {
  return(
    <NavBtn>
      <Button
        onMouseDown={e => {
          e.preventDefault()
          CustomEditor.toggleUnderlineMark(editor)
        }}
      >
        <p style={{ textDecoration: 'underline'}}>U</p>
      </Button>
    </NavBtn>
  )
}