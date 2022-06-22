import { CustomEditor } from '../Editor/Editor'
import './styles.css';

export const Toolbar = ({ editor }) => {
  return(
    <navbar className='navbar-container' bg='dark' variant='dark'>
        <navbar href="#">
          <img
            alt=""
            src="../images/logo.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />{" "}
          Editor
        </navbar>
        <div>
            <button
              onMouseDown={e => {
                e.preventDefault()
                CustomEditor.toggleBoldMark(editor)
              }}
            >
              Bold
            </button>
            <button
              onMouseDown={e => {
                e.preventDefault()
                CustomEditor.toggleCodeBlock(editor)
              }}
            >
              Code Block
            </button>
          </div>
      </navbar>
  )
}