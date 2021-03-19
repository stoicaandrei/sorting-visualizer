import React from 'react';

import { Layout } from 'antd';

import Visualizer from './Visualizer';

const Content: React.FC = () => {
  return (
    <Layout.Content>
      <Visualizer />
    </Layout.Content>
  );
};

export default Content;
