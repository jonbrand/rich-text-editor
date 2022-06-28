import { Button } from '../Button/Button';
import { CustomEditor } from '../Editor/Editor';

export const Italic = ({ editor }) => {
  const icon = 'I';
  return(
    <p style={{ fontStyle: 'italic'}}>
      <Button
        onMouseDown={e => {
          e.preventDefault()
          CustomEditor.toggleItalicMark(editor)
        }}
        icon={icon}
      />
    </p>
  )
}