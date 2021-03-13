import React from 'react';

type Props = {
  width: number;
  height: number;
  color: string;
};

const Bar: React.FC<Props> = ({ width, height, color }) => {
  return (
    <div className="bar" style={{ width, height, backgroundColor: color }} />
  );
};

export default React.memo(Bar);
