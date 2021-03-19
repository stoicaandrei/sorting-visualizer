import React from 'react';

import { useSortingState } from 'contexts';

import ArrayCanvas from './ArrayCanvas';

const Visualizer: React.FC = () => {
  const { array, points } = useSortingState();

  return <ArrayCanvas array={array} points={points} />;
};

export default Visualizer;
