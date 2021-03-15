import React from 'react';

import { Layout } from 'antd';

const Sider: React.FC = () => {
  return (
    <Layout.Sider
      collapsible
      collapsedWidth={0}
      width="40%"
    >
      <span style={{ color: 'white' }}>Code editor</span>
    </Layout.Sider>
  );
};

export default Sider;
