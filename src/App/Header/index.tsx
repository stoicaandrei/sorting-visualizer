import React from 'react';

import { Button, Layout, Space } from 'antd';

import PlayPauseButton from './PlayPauseButton';
import RefreshArrayButton from './RefreshArrayButton';
import ArrayLengthSlider from './ArrayLengthSlider';
import FrequencySlider from './FrequencySlider';
import CustomArrayInput from './CustomArrayInput';
import CustomArrayButton from './CustomArrayButton';

const Header: React.FC = () => {
  return (
    <Layout.Header>
      <Space>
        <PlayPauseButton />
        <RefreshArrayButton />
        <CustomArrayButton />
        <ArrayLengthSlider />
        <FrequencySlider />
        <CustomArrayInput />
      </Space>
    </Layout.Header>
  );
};

export default Header;
