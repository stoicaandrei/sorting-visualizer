import React from 'react';

import { useArrayActions } from 'contexts';

const GenerateArrayButton: React.FC = () => {
  const { generateNewArray } = useArrayActions();

  return <button onClick={generateNewArray}>GenerateArrayButton</button>;
};

export default GenerateArrayButton;
