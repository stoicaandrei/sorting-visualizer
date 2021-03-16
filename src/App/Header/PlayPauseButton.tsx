import React from 'react';

import { Button } from 'antd';

import { useStatusState, useStatusActions } from 'contexts';

const PlayPauseButton: React.FC = () => {
  const { paused } = useStatusState();
  const { play, pause } = useStatusActions();

  return (
    <Button
      onClick={() => {
        paused ? play() : pause();
      }}
    >
      {paused ? 'Play' : 'Pause'}
    </Button>
  );
};

export default PlayPauseButton;
