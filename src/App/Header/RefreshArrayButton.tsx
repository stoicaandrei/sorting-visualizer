import React from 'react';

import { Button } from 'antd';

import { useArrayActions } from 'contexts';

const RefreshArrayButton: React.FC = () => {
  const { refreshArray } = useArrayActions();

  return <Button onClick={refreshArray}>New Array</Button>;
};

export default RefreshArrayButton;
