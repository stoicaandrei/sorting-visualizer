import React, { useEffect, useState } from 'react';

import { generateArrayOfLength } from 'utils';

type State = {
  array: number[];
  arrayLength: number;
  customArrayString: string;
  validCustomArrayString: boolean;
};

type Actions = {
  refreshArray: () => void;
  setArrayLength: (arg0: number) => void;
  replaceArray: () => void;
  setCustomArrayString: (args0: string) => void;
};

const ArrayStateContext = React.createContext<State | undefined>(undefined);
const ArrayActionsContext = React.createContext<Actions | undefined>(undefined);

const INITIAL_LENGTH = 100;
const INITIAL_ARRAY = generateArrayOfLength(INITIAL_LENGTH);

const ArrayProvider: React.FC = ({ children }) => {
  // The length is used for generating new arrays
  const [arrayLength, setArrayLength] = useState(INITIAL_LENGTH);
  const [array, setArray] = useState(INITIAL_ARRAY);

  const [customArrayString, setCustomArrayString] = useState('');
  const validCustomArrayString = !!customArrayString.match(
    /^(\d+\s*,\s*)+\d+\s*$/
  );

  const generateArray = (n: number) => setArray(generateArrayOfLength(n));

  useEffect(() => {
    generateArray(arrayLength);
  }, [arrayLength]);

  const refreshArray = () => generateArray(arrayLength);

  const replaceArray = () => {
    // Replaces the array with a custom one
    const arr = customArrayString.split(',').map((el) => parseInt(el));
    setArray(arr);
    setArrayLength(arr.length);
  };

  return (
    <ArrayStateContext.Provider
      value={{ array, arrayLength, customArrayString, validCustomArrayString }}
    >
      <ArrayActionsContext.Provider
        value={{
          setArrayLength,
          refreshArray,
          replaceArray,
          setCustomArrayString,
        }}
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
  const context = React.useContext(ArrayActionsContext);
  if (context === undefined) {
    throw new Error('useArrayActions must be used within a ArrayProvider');
  }

  return context;
};

export { useArrayState, useArrayActions, ArrayProvider };
