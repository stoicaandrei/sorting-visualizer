import React, { useState } from 'react';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

type Props = {
  value: string;
  onChange: (arg0: string) => void;
};

const CodeEditor: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={(code) => highlight(code, languages.js)}
      className="code-editor"
    />
  );
};

export default CodeEditor;
