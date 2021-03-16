import React from 'react';

import { Layout } from 'antd';

import AlgorithmSelector from './AlgorithmSelector';
import AlgorithmEditor from './AlgorithmEditor';

const Sider: React.FC = () => {
  return (
    <Layout.Sider collapsible collapsedWidth={0} width="40%">
      <AlgorithmSelector />
      <AlgorithmEditor />
    </Layout.Sider>
  );
};

export default Sider;
