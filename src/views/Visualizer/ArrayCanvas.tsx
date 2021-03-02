import React from 'react';

import { SortingPoints } from 'types';

import Bar from './Bar';

import { ValueMapper } from 'utils';

type Props = {
  array: number[];
  points: SortingPoints;
};

const ArrayCanvas: React.FC<Props> = ({ array, points }) => {
  const canvasHeight = 400;
  const canvasWidth = 600;
  const gapWidth = 1;
  const minBarHeight = 10;
  const barColor = 'blue';

  const minVal = Math.min(...array);
  const maxVal = Math.max(...array);
  const bars = array.length;

  const heightMapper = ValueMapper(
    [minVal, maxVal],
    [minBarHeight, canvasHeight]
  );
  const barWidth = (canvasWidth - bars * gapWidth) / bars;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: canvasHeight,
        width: canvasWidth,
      }}
    >
      {array.map((nr, index) => (
        <Bar
          key={nr}
          height={heightMapper(nr)}
          width={barWidth}
          color={points[index] || barColor}
        />
      ))}
    </div>
  );
};

export default ArrayCanvas;
