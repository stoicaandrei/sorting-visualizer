import React from 'react';

import Bar from './Bar';

type Props = {
  array: number[];
};

const ArrayCanvas: React.FC<Props> = ({ array }) => {
  return (
    <div style={{ display: 'flex' }}>
      {array.map((nr) => (
        <Bar key={nr} height={nr} width={20} color="blue" />
      ))}
    </div>
  );
};

export default ArrayCanvas;
