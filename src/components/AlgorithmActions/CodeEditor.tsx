import React, { useState } from 'react';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

type Props = {
  value: string;
};

const CodeEditor: React.FC<Props> = ({ value }) => {
  const [code, setCode] = useState(value);

  return (
    <Editor
      value={code}
      onValueChange={setCode}
      highlight={(code) => highlight(code, languages.js)}
      className="code-editor"
    />
  );
};

export default CodeEditor;
