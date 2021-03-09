import React, { useState } from 'react';

import { useArrayActions, useArrayState } from 'contexts';

const ChangeArrayLengthInput: React.FC = () => {
  const { arrayLength } = useArrayState();
  const { changeArrayLength } = useArrayActions();

  return (
    <div>
      <input
        type="number"
        value={arrayLength}
        onChange={(e) => {
          const length = parseInt(e.target.value);
          changeArrayLength(length);
        }}
      />
    </div>
  );
};

export default ChangeArrayLengthInput;
