import React from 'react';

import { Modal } from 'antd';

import ArrayInput from './ArrayInput';
import GenerateButton from './GenerateButton';

type Props = {
  visible: boolean;
  hide: () => void;
};

const ArrayModal: React.FC<Props> = ({ visible, hide }) => {
  return (
    <Modal
      visible={visible}
      onCancel={hide}
      footer={<GenerateButton />}
      title="Enter custom Array"
    >
      <ArrayInput />
    </Modal>
  );
};

export default ArrayModal;
