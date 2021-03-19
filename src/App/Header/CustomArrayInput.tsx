import React from 'react';

import { Input } from 'antd';

import { useArrayState, useArrayActions } from 'contexts';

const CustomArrayInput: React.FC = () => {
  const { customArrayString } = useArrayState();
  const { setCustomArrayString } = useArrayActions();

  return (
    <Input
      value={customArrayString}
      onChange={(e) => {
        const val = e.target.value;
        setCustomArrayString(val);
      }}
    />
  );
};

export default CustomArrayInput;
