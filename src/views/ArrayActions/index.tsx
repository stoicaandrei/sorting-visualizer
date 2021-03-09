import React from 'react';

import ChangeArrayLengthInput from './ChangeArrayLengthInput';
import GenerateArrayButton from './GenerateArrayButton';

const ArrayActions: React.FC = () => {
  return (
    <div>
      <GenerateArrayButton />
      <ChangeArrayLengthInput />
    </div>
  );
};

export default ArrayActions;
