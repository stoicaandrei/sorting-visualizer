import React from 'react';

import { useAlgorithmState, useAlgorithmActions } from 'contexts';

const AlgorithmSelector: React.FC = () => {
  const { selectedAlgorithm, algorithmNames } = useAlgorithmState();
  const { selectAlgorithm } = useAlgorithmActions();

  return (
    <select
      value={selectedAlgorithm}
      onChange={(e) => {
        const value = e.target.value as any;
        selectAlgorithm(value);
      }}
    >
      {algorithmNames.map((name) => (
        <option value={name} key={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default AlgorithmSelector;
