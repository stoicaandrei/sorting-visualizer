import React from 'react';

import CodeEditor from './CodeEditor';

const AlgorithmActions: React.FC = () => {
  return (
    <div>
      <CodeEditor value="console.log('Hello, World!');" />
    </div>
  );
};

export default AlgorithmActions;
