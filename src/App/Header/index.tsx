import React from 'react';

import { Button, Layout, Space } from 'antd';

import PlayPauseButton from './PlayPauseButton';
import RefreshArrayButton from './RefreshArrayButton';
import ArrayLengthSlider from './ArrayLengthSlider';
import FrequencySlider from './FrequencySlider';
import CustomArrayToggle from './CustomArrayToggle';

const Header: React.FC = () => {
  return (
    <Layout.Header>
      <Space>
        <PlayPauseButton />
        <RefreshArrayButton />
        <CustomArrayToggle />
        <ArrayLengthSlider />
        <FrequencySlider />
      </Space>
    </Layout.Header>
  );
};

export default Header;
