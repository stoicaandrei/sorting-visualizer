import React, { useState } from 'react';

import { generateArrayOfSize } from 'utils';

type StateProps = {
  array: number[];
};

type ActionProps = {
  generateNewArray: () => void;
};

const ArrayStateContext = React.createContext<StateProps>({} as any);
const ArrayActionsContext = React.createContext<ActionProps>({} as any);

const initialLength = 30;
const initialArray = generateArrayOfSize(initialLength);

const ArrayProvider: React.FC = ({ children }) => {
  const [length, setLength] = useState(initialLength);
  const [array, setArray] = useState(initialArray);

  const generateNewArray = () => setArray(generateArrayOfSize(length));

  return (
    <ArrayStateContext.Provider value={{ array }}>
      <ArrayActionsContext.Provider value={{ generateNewArray }}>
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
