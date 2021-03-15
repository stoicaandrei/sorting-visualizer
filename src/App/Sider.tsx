import React from 'react';

import { Layout } from 'antd';

import { AlgorithmEditor, AlgorithmSelector } from 'components';

const Sider: React.FC = () => {
  return (
    <Layout.Sider collapsible collapsedWidth={0} width="40%">
      <AlgorithmSelector />
      <AlgorithmEditor />/
    </Layout.Sider>
  );
};

export default Sider;
