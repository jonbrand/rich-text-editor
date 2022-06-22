import { Button, NavBtn } from './styles';
import { CustomEditor } from '../Editor/Editor';

export const Bold = ({ editor }) => {
  return(
    <NavBtn>
      <Button
        onMouseDown={e => {
          e.preventDefault()
          CustomEditor.toggleBoldMark(editor)
        }}
      >
        <p>B</p>
      </Button>
    </NavBtn>
  )
}