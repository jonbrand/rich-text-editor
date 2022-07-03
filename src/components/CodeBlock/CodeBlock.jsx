import * as S from './styles';
import { CustomEditor } from '../Editor/Editor';

export const CodeBlock = ({ editor }) => {
  return(
    <S.NavBtn>
      <S.Button
        onMouseDown={e => {
          e.preventDefault()
          CustomEditor.toggleCodeBlock(editor)
        }}
      >
        <p>{'<>'}</p>
      </S.Button>
    </S.NavBtn>
  )
}