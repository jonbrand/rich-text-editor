import { Button } from '../Button/Button';
import { CustomEditor } from '../Editor/Editor';

export const CodeBlock = ({ editor }) => {
  const icon = '<>';
  return(
    <Button
      onMouseDown={e => {
        e.preventDefault()
        CustomEditor.toggleCodeBlock(editor)
      }}
      icon={icon}
    />
  )
}