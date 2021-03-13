import React from 'react';

import { useArrayActions, useArrayState } from 'contexts';

const ChangeArrayLengthInput: React.FC = () => {
  const { arrayLength } = useArrayState();
  const { changeArrayLength } = useArrayActions();

  return (
    <input
      type="number"
      value={arrayLength}
      onChange={(e) => {
        const length = parseInt(e.target.value);
        changeArrayLength(length);
      }}
    />
  );
};

export default ChangeArrayLengthInput;
