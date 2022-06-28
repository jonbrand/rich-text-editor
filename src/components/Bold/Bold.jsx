import { Button } from '../Button/Button';
import { CustomEditor } from '../Editor/Editor';

export const Bold = ({ editor }) => {
  const icon = 'B';

  return(
    <Button
      onMouseDown={e => {
        e.preventDefault()
        CustomEditor.toggleBoldMark(editor)
      }}
      icon={icon}
    >
    </Button>
  )
}