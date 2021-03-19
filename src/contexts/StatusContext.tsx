import React, { useState } from 'react';

import { useAlgorithmActions, useArrayActions } from 'contexts';

type Status = 'paused' | 'playing' | 'finished';

type State = {
  status: Status;
  isPlaying: boolean;
  isFinished: boolean;
};

type Actions = {
  play: () => void;
  pause: () => void;
  finish: () => void;
};

const StatusStateContext = React.createContext<State | undefined>(undefined);
const StatusActionsContext = React.createContext<Actions | undefined>(
  undefined
);

const StatusProvider: React.FC = ({ children }) => {
  const { refreshArray } = useArrayActions();
  const { compileAlgorithm } = useAlgorithmActions();

  const [status, setStatus] = useState<Status>('finished');
  const isPlaying = status === 'playing';
  const isFinished = status === 'finished';

  const resumePlaying = () => setStatus('playing');
  const newGame = () => {
    refreshArray();
    compileAlgorithm();
  };

  const play = () => {
    if (isFinished) newGame();
    resumePlaying();
  };
  const pause = () => setStatus('paused');
  const finish = () => setStatus('finished');

  return (
    <StatusStateContext.Provider value={{ status, isPlaying, isFinished }}>
      <StatusActionsContext.Provider value={{ play, pause, finish }}>
        {children}
      </StatusActionsContext.Provider>
    </StatusStateContext.Provider>
  );
};

const useStatusState = () => {
  const context = React.useContext(StatusStateContext);
  if (context === undefined) {
    throw new Error('useStatusState must be used within a StatusProvider');
  }

  return context;
};

const useStatusActions = () => {
  const context = React.useContext(StatusActionsContext);
  if (context === undefined) {
    throw new Error('useStatusActions must be used within a StatusProvider');
  }

  return context;
};

export { useStatusState, useStatusActions, StatusProvider };
