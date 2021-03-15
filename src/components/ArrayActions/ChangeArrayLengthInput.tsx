import React from 'react';

import { useArrayActions, useArrayState } from 'contexts';

const ChangeArrayLengthInput: React.FC = () => {
  const { arrayLength } = useArrayState();
  const { setArrayLength } = useArrayActions();

  return (
    <input
      type="number"
      value={arrayLength}
      onChange={(e) => {
        const length = parseInt(e.target.value);
        setArrayLength(length);
      }}
    />
  );
};

export default ChangeArrayLengthInput;
