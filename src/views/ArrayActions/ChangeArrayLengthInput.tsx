import React, { useState } from 'react';

import { useArrayActions, useArrayState } from 'contexts';

const ChangeArrayLengthInput: React.FC = () => {
  const { arrayLength } = useArrayState();
  const { generateNewArray, changeArrayLength } = useArrayActions();

  const [length, setLength] = useState(arrayLength);

  return (
    <div>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
      />

      <button onClick={() => changeArrayLength(length)}>
        Change array length
      </button>
    </div>
  );
};

export default ChangeArrayLengthInput;
