import * as S from './styles';
import { CustomEditor } from '../Editor/Editor';

export const Italic = ({ editor }) => {
  return(
   <S.NavBtn>
      <S.Button
        onMouseDown={e => {
          e.preventDefault()
          CustomEditor.toggleItalicMark(editor)
        }}
      >
        <p>I</p>
      </S.Button>
   </S.NavBtn>
  )
}