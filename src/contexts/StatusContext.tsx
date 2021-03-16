import React, { useState } from 'react';

type State = unknown;

type Actions = unknown;

const StatusStateContext = React.createContext<State | undefined>(undefined);
const StatusActionsContext = React.createContext<Actions | undefined>(undefined);

const StatusProvider: React.FC = ({ children }) => {
  return (
    <StatusStateContext.Provider value={{}}>
      <StatusActionsContext.Provider value={{}}>
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
