import React from 'react';

import { Input } from 'antd';

import { useArrayState, useArrayActions } from 'contexts';

const ArrayInput: React.FC = () => {
  const { customArrayString } = useArrayState();
  const { setCustomArrayString } = useArrayActions();

  return (
    <Input.TextArea
      rows={4}
      placeholder="1,2,3,4,5,6"
      value={customArrayString}
      onChange={(e) => {
        const val = e.target.value;
        setCustomArrayString(val);
      }}
    />
  );
};

export default ArrayInput;
