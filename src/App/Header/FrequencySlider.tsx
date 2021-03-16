import React from 'react';

import { Slider, Space } from 'antd';

import { useSortingActions, useSortingState } from 'contexts';

const FrequencySlider: React.FC = () => {
  const { frequency } = useSortingState();
  const { changeFrequency } = useSortingActions();

  return (
    <Space>
      Speed
      <Slider
        className="frequency-slider"
        value={frequency}
        tipFormatter={(n) => `${n} ticks/sec`}
        min={1}
        max={120}
        onChange={changeFrequency}
      />
    </Space>
  );
};

export default FrequencySlider;
