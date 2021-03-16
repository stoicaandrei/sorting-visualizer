import React from 'react';

import { Button } from 'antd';

import { useStatusState, useStatusActions } from 'contexts';

const PlayPauseButton: React.FC = () => {
  const { isPlaying } = useStatusState();
  const { play, pause } = useStatusActions();

  return (
    <Button
      onClick={() => {
        isPlaying ? pause() : play();
      }}
    >
      {isPlaying ? 'Pause' : 'Play'}
    </Button>
  );
};

export default PlayPauseButton;
