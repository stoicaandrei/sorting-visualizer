import React from 'react';

import { Layout, Menu } from 'antd';

const Header: React.FC = () => {
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" selectable={false}>
        <Menu.Item>Play</Menu.Item>
        <Menu.Item>Generate Array</Menu.Item>
        <Menu.Item>Custom Array</Menu.Item>
        <Menu.Item>Size</Menu.Item>
        <Menu.Item>Speed</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
