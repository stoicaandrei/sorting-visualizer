import React from 'react';

import { Button } from 'antd';

import { useArrayState, useArrayActions } from 'contexts';

const GenerateButton: React.FC = () => {
  const { validCustomArrayString } = useArrayState();
  const { replaceArray } = useArrayActions();

  return (
    <Button
      type="primary"
      onClick={replaceArray}
      disabled={!validCustomArrayString}
    >
      Generate
    </Button>
  );
};

export default GenerateButton;
