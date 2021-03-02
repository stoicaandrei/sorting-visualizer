import React, { useState } from 'react';

import selectionSort from 'algoritms/selectionSort';

import { useInterval } from 'hooks';
import { useArrayState } from './ArrayContext';

type ContextProps = {
  array: number[];
  points: any;
};

const SortingContext = React.createContext<ContextProps>({} as any);

const SortingProvider: React.FC = ({ children }) => {
  const { array } = useArrayState();

  const [generator] = useState(selectionSort(array));

  const [points, setPoints] = useState([]);

  const [frequency, setFrequency] = useState(10);

  useInterval(() => {
    const next = generator.next();

    if (next.done) return setFrequency(0);

    const returnedPoints = next.value;
    const points: any = {};
    Object.values(returnedPoints).forEach((point) => {
      points[point] = 'orange';
    });
    setPoints(points);
  }, 1000 / frequency);

  return (
    <SortingContext.Provider value={{ array, points }}>
      {children}
    </SortingContext.Provider>
  );
};

const useSortingState = () => {
  return React.useContext(SortingContext);
};

export { useSortingState, SortingProvider };
