import React from 'react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

type Props = {
  value: string;
  onChange: (arg0: string) => void;
};

const CodeEditor: React.FC<Props> = ({ value, onChange }) => {
  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      value={value}
      onChange={onChange}
      width="100%"
      height="87vh"
      showPrintMargin
      showGutter
      highlightActiveLine
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default CodeEditor;
