import React, { useState } from 'react';

import { generateArrayOfLength } from 'utils';

type StateProps = {
  array: number[];
};

type ActionProps = {
  generateNewArray: () => void;
  changeArrayLength: (arg0: number) => void;
};

const ArrayStateContext = React.createContext<StateProps>({} as any);
const ArrayActionsContext = React.createContext<ActionProps>({} as any);

const initialLength = 30;
const initialArray = generateArrayOfLength(initialLength);

const ArrayProvider: React.FC = ({ children }) => {
  const [length, setLength] = useState(initialLength);
  const [array, setArray] = useState(initialArray);

  const changeArrayLength = (n: number) => setLength(n);
  const generateNewArray = () => setArray(generateArrayOfLength(length));

  return (
    <ArrayStateContext.Provider value={{ array }}>
      <ArrayActionsContext.Provider
        value={{ changeArrayLength, generateNewArray }}
      >
        {children}
      </ArrayActionsContext.Provider>
    </ArrayStateContext.Provider>
  );
};

const useArrayState = () => {
  return React.useContext(ArrayStateContext);
};

const useArrayActions = () => {
  return React.useContext(ArrayActionsContext);
};

export { useArrayState, useArrayActions, ArrayProvider };
