import React from 'react';

import { Select } from 'antd';

import { useAlgorithmState, useAlgorithmActions } from 'contexts';
import { camelCaseToCaseText } from '../../utils';

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
          {camelCaseToCaseText(name)}
        </Select.Option>
      ))}
    </Select>
  );
};

export default AlgorithmSelector;
