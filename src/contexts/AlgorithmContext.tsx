import React, { useState } from 'react';

import { SortingFunction } from '../types';

type State = {
  algorithmString: string;
  algorithm?: SortingFunction;
};

type Actions = {
  setAlgorithmString: (arg0: string) => void;
  compileAlgorithm: () => void;
};

const AlgorithmStateContext = React.createContext<State | undefined>(undefined);
const AlgorithmActionsContext = React.createContext<Actions | undefined>(
  undefined
);

const AlgorithmProvider: React.FC = ({ children }) => {
  const [algorithmString, setAlgorithmString] = useState('');
  const [algorithm, setAlgorithm] = useState<SortingFunction | undefined>();

  const compileAlgorithm = () => {
    let sortingAlgorithm: SortingFunction;
    eval(algorithmString);
    setAlgorithm(() => sortingAlgorithm);
  };

  return (
    <AlgorithmStateContext.Provider value={{ algorithm, algorithmString }}>
      <AlgorithmActionsContext.Provider
        value={{ setAlgorithmString, compileAlgorithm }}
      >
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
