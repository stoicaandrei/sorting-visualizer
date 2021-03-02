import React, { useState } from 'react';

import selectionSort, {
  displayRules as selectionSortRules,
} from 'views/Visualizer/selectionSort';

import { useInterval } from 'hooks';
import { generateArrayOfSize } from '../utils';

type ContextProps = {
  array: number[];
  points: any;
};

const SortingContext = React.createContext<ContextProps>({} as any);

const SortingProvider: React.FC = ({ children }) => {
  const [displayRules, setDisplayRules] = useState(selectionSortRules);
  const [array, setArray] = useState(generateArrayOfSize(30));
  const [generator] = useState(selectionSort(array));

  const [points, setPoints] = useState([]);

  const [frequency, setFrequency] = useState(10);

  useInterval(() => {
    const { done, value: values } = generator.next();

    if (done) return setFrequency(0);

    const points: any = {};
    displayRules.forEach((rule) => {
      const { key, color } = rule;
      const point = values[key];

      points[point] = color;
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
