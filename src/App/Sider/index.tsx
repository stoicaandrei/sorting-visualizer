import React from 'react';

import { Layout } from 'antd';

import AlgorithmSelector from './AlgorithmSelector';
import AlgorithmEditor from './AlgorithmEditor';

import { useWindowSize } from 'hooks';

const Sider: React.FC = () => {
  const [windowWidth] = useWindowSize();

  const siderTriggerWidth = 36;
  const smallWidth = windowWidth - siderTriggerWidth * 2;
  const bigWidth = 400;
  const siderWidth = Math.min(smallWidth, bigWidth);

  return (
    <Layout.Sider collapsible collapsedWidth={0} width={siderWidth}>
      <AlgorithmSelector />
      <AlgorithmEditor />
    </Layout.Sider>
  );
};

export default Sider;
