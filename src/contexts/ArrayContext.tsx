import React, { useState } from 'react';

import { generateArrayOfLength } from 'utils';

type State = {
  array: number[];
};

type Actions = {
  generateNewArray: () => void;
  changeArrayLength: (arg0: number) => void;
  replaceArray: (args0: number[]) => void;
};

const ArrayStateContext = React.createContext<State | undefined>(undefined);
const ArrayActionsContext = React.createContext<Actions | undefined>(undefined);

const initialLength = 30;
const initialArray = generateArrayOfLength(initialLength);

const ArrayProvider: React.FC = ({ children }) => {
  // The length is used for generating new arrays
  const [length, setLength] = useState(initialLength);
  const [array, setArray] = useState(initialArray);

  const changeArrayLength = (n: number) => setLength(n);

  const generateNewArray = () => setArray(generateArrayOfLength(length));
  const replaceArray = (arr: number[]) => {
    // Replaces the array with a custom one
    setArray(arr);
    setLength(arr.length);
  };

  return (
    <ArrayStateContext.Provider value={{ array }}>
      <ArrayActionsContext.Provider
        value={{ changeArrayLength, generateNewArray, replaceArray }}
      >
        {children}
      </ArrayActionsContext.Provider>
    </ArrayStateContext.Provider>
  );
};

const useArrayState = () => {
  const context = React.useContext(ArrayStateContext);
  if (context === undefined) {
    throw new Error('useArrayState must be used within a ArrayProvider');
  }

  return context;
};

const useArrayActions = () => {
  const context = React.useContext(ArrayStateContext);
  if (context === undefined) {
    throw new Error('useArrayActions must be used within a ArrayProvider');
  }

  return context;
};

export { useArrayState, useArrayActions, ArrayProvider };
