import React from 'react';

import { useSortingActions } from 'contexts';

const FrequencySlider: React.FC = () => {
  const { changeFrequency } = useSortingActions();

  return (
    <input
      type="range"
      min={1}
      max={120}
      onChange={(e) => {
        const value = parseInt(e.target.value);
        changeFrequency(value);
      }}
    />
  );
};

export default FrequencySlider;
