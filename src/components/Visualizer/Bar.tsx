import React from 'react';

type Props = {
  height: number | string;
  color?: string;
};

const Bar: React.FC<Props> = ({ height, color }) => {
  return <div className="bar" style={{ height, backgroundColor: color }} />;
};

export default React.memo(Bar);
