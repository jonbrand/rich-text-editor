import * as S from './styles';
import { CustomEditor } from '../Editor/Editor';

export const Bold = ({ editor }) => {
  return(
    <S.NavBtn>
      <S.Button
        onMouseDown={e => {
          e.preventDefault()
          CustomEditor.toggleBoldMark(editor)
        }}
      >
        <p>B</p>
      </S.Button>
    </S.NavBtn>
  )
}