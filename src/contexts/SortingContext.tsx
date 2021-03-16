import React, { useState, useEffect } from 'react';

import { ColorMapGenerator, SortingPoints } from 'types';

import { colorMapToSortingPoints } from 'utils';

import { useInterval } from 'hooks';
import { useArrayState, useAlgorithmState } from 'contexts';

type State = {
  array: number[];
  points: SortingPoints;
  paused: boolean;
};

type Actions = {
  changeFrequency: (arg0: number) => void;
  setPaused: (arg0: boolean) => void;
};

const SortingStateContext = React.createContext<State | undefined>(undefined);
const SortingActionsContext = React.createContext<Actions | undefined>(
  undefined
);

const INITIAL_FREQUENCY = 60;

const SortingProvider: React.FC = ({ children }) => {
  const { array } = useArrayState();
  const { algorithm } = useAlgorithmState();

  const [sortingSteps, setSortingSteps] = useState<ColorMapGenerator>();

  useEffect(() => {
    setSortingSteps(algorithm ? algorithm(array) : undefined);
  }, [array, algorithm]);

  const [frequency, setFrequency] = useState(INITIAL_FREQUENCY);
  const changeFrequency = (frequency: number) => setFrequency(frequency);

  const [paused, setPaused] = useState(true);

  const [points, setPoints] = useState({});

  const delay = paused ? 1 : 1_000_000;
  const interval = 1000 / (frequency * delay);
  useInterval(() => {
    if (!sortingSteps) return;

    const next = sortingSteps.next();

    if (next.done) return setPaused(true);

    const colorMap = next.value;
    const points = colorMapToSortingPoints(colorMap);
    setPoints(points);
  }, interval);

  return (
    <SortingStateContext.Provider value={{ array, points, paused }}>
      <SortingActionsContext.Provider value={{ changeFrequency, setPaused }}>
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
