import React from 'react';

import { useArrayActions, useArrayState } from 'contexts';

const GenerateArrayButton: React.FC = () => {
  const { arrayLength } = useArrayState();
  const { generateArray } = useArrayActions();

  return (
    <button onClick={() => generateArray(arrayLength)}>
      GenerateArrayButton
    </button>
  );
};

export default GenerateArrayButton;
