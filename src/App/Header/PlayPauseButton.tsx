import React from 'react';

import { Button } from 'antd';

import { useStatusState, useStatusActions } from 'contexts';

const PlayPauseButton: React.FC = () => {
  const { status } = useStatusState();
  const { play, pause } = useStatusActions();

  return (
    <Button
      onClick={() => {
        status != 'playing' ? play() : pause();
      }}
    >
      {status == 'playing' ? 'Play' : 'Pause'}
    </Button>
  );
};

export default PlayPauseButton;
