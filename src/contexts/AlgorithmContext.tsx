import React, { useState } from 'react';

import { mergeSort } from '../algorithms';
import { SortingFunction } from '../types';

type State = {
  algorithmString: string;
  algorithm: SortingFunction;
};

type Actions = {
  setAlgorithmString: (arg0: string) => void;
};

const AlgorithmStateContext = React.createContext<State | undefined>(undefined);
const AlgorithmActionsContext = React.createContext<Actions | undefined>(
  undefined
);

const AlgorithmProvider: React.FC = ({ children }) => {
  const [algorithmString, setAlgorithmString] = useState('');
  const [algorithm] = useState(() => mergeSort);

  return (
    <AlgorithmStateContext.Provider value={{ algorithm, algorithmString }}>
      <AlgorithmActionsContext.Provider value={{ setAlgorithmString }}>
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
