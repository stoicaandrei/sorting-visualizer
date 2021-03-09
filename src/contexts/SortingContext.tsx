import React, { useState, useEffect } from 'react';

import { SortingPoints } from 'types';

import { mergeSort as sortingAlgorithm } from 'algoritms';
import { colorMapToSortingPoints } from 'utils';

import { useInterval } from 'hooks';
import { useArrayState } from 'contexts';

type State = {
  array: number[];
  points: SortingPoints;
};

type Actions = {
  changeFrequency: (arg0: number) => void;
};

const SortingStateContext = React.createContext<State | undefined>(undefined);
const SortingActionsContext = React.createContext<Actions | undefined>(
  undefined
);

const INITIAL_FREQUENCY = 60;

const SortingProvider: React.FC = ({ children }) => {
  const { array } = useArrayState();
  const [generator, setGenerator] = useState(sortingAlgorithm(array));
  useEffect(() => {
    setGenerator(sortingAlgorithm(array));
  }, [array]);

  const [frequency, setFrequency] = useState(INITIAL_FREQUENCY);
  const changeFrequency = (frequency: number) => setFrequency(frequency);

  const [points, setPoints] = useState({});
  useInterval(() => {
    const next = generator.next();

    if (next.done) return;

    const colorMap = next.value;
    const points = colorMapToSortingPoints(colorMap);
    setPoints(points);
  }, 1000 / frequency);

  return (
    <SortingStateContext.Provider value={{ array, points }}>
      <SortingActionsContext.Provider value={{ changeFrequency }}>
        {children}
      </SortingActionsContext.Provider>
    </SortingStateContext.Provider>
  );
};

const useSortingState = () => {
  const context = React.useContext(SortingStateContext);
  if (context === undefined) {
    throw new Error('useSortingState must be used within a SortingProvider');
  }

  return context;
};

const useSortingActions = () => {
  const context = React.useContext(SortingActionsContext);
  if (context === undefined) {
    throw new Error('useSortingActions must be used within a SortingProvider');
  }

  return context;
};

export { useSortingState, useSortingActions, SortingProvider };
