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

const SortingStateContext = React.createContext<State | undefined>(undefined);

const SortingProvider: React.FC = ({ children }) => {
  const { array } = useArrayState();

  const [generator, setGenerator] = useState(sortingAlgorithm(array));

  useEffect(() => {
    setGenerator(sortingAlgorithm(array));
  }, [array]);

  const [points, setPoints] = useState({});

  const [frequency, setFrequency] = useState(30);

  useInterval(() => {
    const next = generator.next();

    if (next.done) return setFrequency(0);

    const colorMap = next.value;
    const points = colorMapToSortingPoints(colorMap);
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
