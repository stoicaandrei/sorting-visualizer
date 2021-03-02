import React from 'react';

import { useSortingState } from 'contexts';

import ArrayCanvas from './ArrayCanvas';

const Visualizer: React.FC = () => {
  const { array, points } = useSortingState();

  return (
    <div>
      <ArrayCanvas array={array} points={points} />
    </div>
  );
};

export default Visualizer;
