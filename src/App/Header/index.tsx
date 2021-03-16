import React from 'react';

import { Button, Layout, Space } from 'antd';

import PlayPauseButton from './PlayPauseButton';
import RefreshArrayButton from './RefreshArrayButton';
import FrequencySlider from './FrequencySlider';

const Header: React.FC = () => {
  return (
    <Layout.Header>
      <Space>
        <PlayPauseButton />
        <RefreshArrayButton />
        <Button>Custom Array</Button>
        <Button>Speed & Size</Button>
        <FrequencySlider />
      </Space>
    </Layout.Header>
  );
};

export default Header;
