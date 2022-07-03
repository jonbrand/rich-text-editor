import * as S from './styles';
import { CustomEditor } from '../Editor/Editor';

export const Underline = ({ editor }) => {
  return(
    <S.NavBtn>
      <S.Button
        onMouseDown={e => {
          e.preventDefault()
          CustomEditor.toggleUnderlineMark(editor)
        }}
      >
        <p>U</p>
      </S.Button>
    </S.NavBtn>
  )
}