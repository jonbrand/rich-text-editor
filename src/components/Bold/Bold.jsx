import { Button} from '../Button/Button'
import { CustomEditor } from '../Editor/Editor';

export const Bold = ({ editor }) => {
  return(
    <Button
      onMouseDown={e => {
        e.preventDefault()
        CustomEditor.toggleBoldMark(editor)
      }}
    >
      <p>B</p>
    </Button>
  )
}