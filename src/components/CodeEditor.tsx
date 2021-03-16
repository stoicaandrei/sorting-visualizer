import React from 'react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

type Props = {
  value: string;
  onChange: (arg0: string) => void;
};

const CodeEditor: React.FC<Props> = ({ value, onChange }) => {
  return (
    <AceEditor
      mode="javascript"
      theme="github"
      value={value}
      onChange={onChange}
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default CodeEditor;
