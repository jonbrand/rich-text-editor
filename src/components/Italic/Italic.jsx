import { Button, NavBtn } from './styles';
import { CustomEditor } from '../Editor/Editor';

export const Italic = ({ editor }) => {
  return(
    <NavBtn>
      <Button
        onMouseDown={e => {
          e.preventDefault()
          CustomEditor.toggleItalicMark(editor)
        }}
      >
        <p>I</p>
      </Button>
    </NavBtn>
  )
}