import React from 'react';

import { Button } from 'antd';

import CustomArrayModal from './CustomArrayModal';

import { useModal } from 'hooks';

const CustomArrayButton: React.FC = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Button onClick={toggle}>Custom Array</Button>
      <CustomArrayModal visible={isShowing} hide={toggle} />
    </>
  );
};

export default CustomArrayButton;
