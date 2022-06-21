import React, { useCallback, useState } from "react";
import { Navbar } from "react-bootstrap";
import { createEditor, Editor, Transforms, Text } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { initialValue } from './Editor.constants';

const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    })

    return !!match
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'code',
    })

    return !!match
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor)
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code'},
      { match: n => Editor.isBlock(editor, n)}
    )
  },
}

export const TextEditor = ({ onChange }) => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, []);

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return(
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href="#">
          <img
            alt=""
            src="../images/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Editor
        </Navbar.Brand>
      </Navbar>
      <div className="App">
        <Slate editor={editor} value={initialValue} onChange={onChange}>
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
          <Editable 
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={e => {
              if(!e.ctrlKey) {
                return
              }
              // eslint-disable-next-line default-case
              switch (e.key) {
                case 'p': {
                  e.preventDefault();
                  CustomEditor.toggleCodeBlock(editor);
                  break
                }
                case 'b': {
                  e.preventDefault()
                  CustomEditor.toggleBoldMark(editor);
                  break
                }
              }
            }
          }
          />
        </Slate>
      </div>
    </>
  )
}

const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}

const Leaf = props => {
  
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal'}}
    >
      {props.children}
    </span>
  )
}