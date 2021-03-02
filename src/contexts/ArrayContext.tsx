import React, { useState } from 'react';

type StateProps = {};

type ActionProps = {};

const ArrayStateContext = React.createContext<StateProps>({} as any);
const ArrayActionsContext = React.createContext<ActionProps>({} as any);

const ArrayProvider: React.FC = ({ children }) => {
  return (
    <ArrayStateContext.Provider value={{}}>
      <ArrayActionsContext.Provider value={{}}>
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
