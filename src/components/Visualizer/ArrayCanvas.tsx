import React from 'react';

import { SortingPoints } from 'types';

import Bar from './Bar';

import { ValueMapper } from 'utils';

type Props = {
  array: number[];
  points: SortingPoints;
};

const ArrayCanvas: React.FC<Props> = ({ array, points }) => {
  const minBarHeight = 5;
  const maxBarHeight = 100;

  const minVal = Math.min(...array);
  const maxVal = Math.max(...array);

  const heightMapper = ValueMapper(
    [minVal, maxVal],
    [minBarHeight, maxBarHeight]
  );

  return (
    <div className="visualizer-canvas">
      {array.map((nr, index) => (
        <Bar key={nr} height={heightMapper(nr) + '%'} color={points[index]} />
      ))}
    </div>
  );
};

export default ArrayCanvas;
