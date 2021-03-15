import React from 'react';

import { Layout, Menu } from 'antd';

import { useArrayActions, useArrayState, useAlgorithmActions } from 'contexts';

const Header: React.FC = () => {
  const { arrayLength } = useArrayState();
  const { generateArray } = useArrayActions();
  const { compileAlgorithm } = useAlgorithmActions();

  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" selectable={false}>
        <>
          <Menu.Item onClick={compileAlgorithm}>Play</Menu.Item>
          <Menu.Item onClick={() => generateArray(arrayLength)}>
            Generate New Array
          </Menu.Item>

          <Menu.Item>Custom Array</Menu.Item>
          <Menu.Item>Size</Menu.Item>
          <Menu.Item>Speed</Menu.Item>
        </>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
