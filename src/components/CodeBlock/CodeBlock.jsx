import { Button, NavBtn } from './styles';
import { CustomEditor } from '../Editor/Editor';

export const CodeBlock = ({ editor }) => {
  return(
    <NavBtn>
      <Button
        onMouseDown={e => {
          e.preventDefault()
          CustomEditor.toggleBoldMark(editor)
        }}
      >
        <p>{'<>'}</p>
      </Button>
    </NavBtn>
  )
}