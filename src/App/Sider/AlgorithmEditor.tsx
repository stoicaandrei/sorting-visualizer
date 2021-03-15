import React from 'react';

import { CodeEditor } from 'components';

import { useAlgorithmState, useAlgorithmActions } from 'contexts';

const AlgorithmEditor: React.FC = () => {
  const { algorithmString } = useAlgorithmState();
  const { setAlgorithmString } = useAlgorithmActions();

  return <CodeEditor value={algorithmString} onChange={setAlgorithmString} />;
};

export default AlgorithmEditor;
