import React from 'react';

import { Button } from 'antd';

import { useArrayActions } from 'contexts';

const CustomArrayButton: React.FC = () => {
  const { replaceArray } = useArrayActions();

  return <Button onClick={replaceArray}>Custom Array</Button>;
};

export default CustomArrayButton;
