import React from 'react';

import { Modal } from 'antd';

import CustomArrayInput from './CustomArrayInput';
import CustomArrayGenerate from './CustomArrayGenerate';

type Props = {
  visible: boolean;
  hide: () => void;
};

const CustomArrayModal: React.FC<Props> = ({ visible, hide }) => {
  return (
    <Modal
      visible={visible}
      onCancel={hide}
      footer={<CustomArrayGenerate />}
      title="Enter custom Array"
    >
      <CustomArrayInput />
    </Modal>
  );
};

export default CustomArrayModal;
