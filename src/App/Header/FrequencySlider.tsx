import React from 'react';

import { Slider } from 'antd';

import { useSortingActions } from 'contexts';

const FrequencySlider: React.FC = () => {
  const { changeFrequency } = useSortingActions();

  return (
    <Slider
      min={1}
      max={120}
      style={{ width: 200 }}
      onChange={(n: number) => {
        changeFrequency(n);
      }}
    />
  );
};

export default FrequencySlider;
