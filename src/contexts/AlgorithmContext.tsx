import React, { useState } from 'react';

import * as algorithms from 'algorithms';
import { SortingFunction } from 'types';

type AlgorithmName = keyof typeof algorithms;

type State = {
  algorithmString: string;
  algorithm?: SortingFunction;
  algorithmNames: AlgorithmName[];
  selectedAlgorithm?: AlgorithmName;
};

type Actions = {
  setAlgorithmString: (arg0: string) => void;
  compileAlgorithm: () => void;
  selectAlgorithm: (arg0: string) => void;
};

const AlgorithmStateContext = React.createContext<State | undefined>(undefined);
const AlgorithmActionsContext = React.createContext<Actions | undefined>(
  undefined
);

const algorithmNames = Object.keys(algorithms) as AlgorithmName[];

const AlgorithmProvider: React.FC = ({ children }) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmName>(
    'mergeSort'
  );
  const [algorithmString, setAlgorithmString] = useState(algorithms.mergeSort);
  const [algorithm, setAlgorithm] = useState<SortingFunction | undefined>();

  const selectAlgorithm = (name: string) => {
    const trueName = name as AlgorithmName;
    setSelectedAlgorithm(trueName);
    setAlgorithmString(algorithms[trueName]);
  };

  const compileAlgorithm = () => {
    let sortingAlgorithm: SortingFunction;
    eval(algorithmString);
    setAlgorithm(() => sortingAlgorithm);
  };

  return (
    <AlgorithmStateContext.Provider
      value={{ algorithm, algorithmString, algorithmNames, selectedAlgorithm }}
    >
      <AlgorithmActionsContext.Provider
        value={{ setAlgorithmString, compileAlgorithm, selectAlgorithm }}
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
