import React, { useState } from 'react';

import { SortingPoints } from 'types';

import { bubbleSort as sortingAlgorithm } from 'algoritms';

import { useInterval } from 'hooks';
import { useArrayState } from './ArrayContext';

type State = {
  array: number[];
  points: SortingPoints;
};

const SortingStateContext = React.createContext<State | undefined>(undefined);

const SortingProvider: React.FC = ({ children }) => {
  const { array } = useArrayState();

  const [generator] = useState(sortingAlgorithm(array));

  const [points, setPoints] = useState({});

  const [frequency, setFrequency] = useState(10);

  useInterval(() => {
    const next = generator.next();

    if (next.done) return setFrequency(0);

    const returnedPoints = next.value;
    const points: SortingPoints = {};
    Object.values(returnedPoints).forEach((point) => {
      points[point] = 'orange';
    });
    setPoints(points);
  }, 1000 / frequency);

  return (
    <SortingStateContext.Provider value={{ array, points }}>
      {children}
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

export { useSortingState, SortingProvider };
