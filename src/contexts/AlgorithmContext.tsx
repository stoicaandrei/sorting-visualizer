import React, { useState } from 'react';

type State = unknown;

type Actions = unknown;

const AlgorithmStateContext = React.createContext<State | undefined>(undefined);
const AlgorithmActionsContext = React.createContext<Actions | undefined>(
  undefined
);

const AlgorithmProvider: React.FC = ({ children }) => {
  return (
    <AlgorithmStateContext.Provider value={{}}>
      <AlgorithmActionsContext.Provider value={{}}>
        {children}
      </AlgorithmActionsContext.Provider>
    </AlgorithmStateContext.Provider>
  );
};

const useAlgorithmState = () => {
  const context = React.useContext(AlgorithmStateContext);
  if (context === undefined) {
    throw new Error(
      'useAlgorithmState must be used within a AlgorithmProvider'
    );
  }

  return context;
};

const useAlgorithmActions = () => {
  const context = React.useContext(AlgorithmActionsContext);
  if (context === undefined) {
    throw new Error(
      'useAlgorithmActions must be used within a AlgorithmProvider'
    );
  }

  return context;
};

export { useAlgorithmState, useAlgorithmActions, AlgorithmProvider };
