import React, { useState } from "react";
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

export const Editor = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'Escreva aqui...' }],
    },
  ];

  return(
    <Slate editor={editor} value={initialValue}>
      <Editable />
    </Slate>
  )
}