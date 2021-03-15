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

          <Menu.Item disabled>Custom Array</Menu.Item>
          <Menu.Item disabled>Speed & Size</Menu.Item>
        </>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
