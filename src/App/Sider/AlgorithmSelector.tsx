import React from 'react';

import { Select } from 'antd';

import { useAlgorithmState, useAlgorithmActions } from 'contexts';

const AlgorithmSelector: React.FC = () => {
  const { selectedAlgorithm, algorithmNames } = useAlgorithmState();
  const { selectAlgorithm } = useAlgorithmActions();

  return (
    <Select
      className="algorithm-selector"
      value={selectedAlgorithm}
      onChange={selectAlgorithm}
    >
      {algorithmNames.map((name) => (
        <Select.Option value={name} key={name}>
          {name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default AlgorithmSelector;
