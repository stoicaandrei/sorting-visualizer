import React from 'react';

import { EditOutlined } from '@ant-design/icons';

import CustomArrayModal from './CustomArrayModal';

import { useModal } from 'hooks';

const CustomArrayToggle: React.FC = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <EditOutlined onClick={toggle} />
      <CustomArrayModal visible={isShowing} hide={toggle} />
    </>
  );
};

export default CustomArrayToggle;
