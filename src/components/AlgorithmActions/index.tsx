import React from 'react';

import AlgorithmEditor from './AlgorithmEditor';

import { useAlgorithmActions } from 'contexts';

const AlgorithmActions: React.FC = () => {
  const { compileAlgorithm } = useAlgorithmActions();

  return (
    <div>
      <button onClick={compileAlgorithm}>Compile</button>
      <AlgorithmEditor />
    </div>
  );
};

export default AlgorithmActions;
