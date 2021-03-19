import React from 'react';

import { Slider, Space } from 'antd';

import { useArrayState, useArrayActions } from 'contexts';

const ArrayLengthSlider: React.FC = () => {
  const { arrayLength } = useArrayState();
  const { setArrayLength } = useArrayActions();

  return (
    <Space>
      Size
      <Slider
        className="array-length-slider"
        value={arrayLength}
        min={0}
        max={300}
        onChange={setArrayLength}
      />
    </Space>
  );
};

export default ArrayLengthSlider;
