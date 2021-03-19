import React from 'react';

import { Button, Layout, Space } from 'antd';

import PlayPauseButton from './PlayPauseButton';
import RefreshArrayButton from './RefreshArrayButton';
import ArrayLengthSlider from './ArrayLengthSlider';
import FrequencySlider from './FrequencySlider';
import CustomArrayButton from './CustomArrayButton';
import CustomArrayModal from './CustomArrayModal';

import { useModal } from 'hooks';

const Header: React.FC = () => {
  const { isShowing, toggle } = useModal();

  return (
    <Layout.Header>
      <Space>
        <PlayPauseButton />
        <RefreshArrayButton />
        <CustomArrayButton />
        <ArrayLengthSlider />
        <FrequencySlider />
        <Button onClick={toggle}>Show modal</Button>
        <CustomArrayModal visible={isShowing} hide={toggle} />
      </Space>
    </Layout.Header>
  );
};

export default Header;
