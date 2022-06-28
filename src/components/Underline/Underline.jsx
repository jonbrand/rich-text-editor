import { CustomEditor } from '../Editor/Editor';
import { Button } from '../Button/Button';

export const Underline = ({ editor }) => {
  const icon = 'U';
  return(
    <p style={{ textDecoration: 'underline'}}>
      <Button
        onMouseDown={e => {
          e.preventDefault()
          CustomEditor.toggleUnderlineMark(editor)
        }}
        icon={icon}
        />
    </p>
  )
}