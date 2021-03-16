import React from 'react';

import { Button, Layout, Space } from 'antd';

import PlayPauseButton from './PlayPauseButton';
import FrequencySlider from './FrequencySlider';

const Header: React.FC = () => {
  return (
    <Layout.Header>
      <Space>
        <PlayPauseButton />
        <Button> Generate New Array</Button>
        <Button>Custom Array</Button>
        <Button>Speed & Size</Button>
        <FrequencySlider />
      </Space>
    </Layout.Header>
  );
};

export default Header;
