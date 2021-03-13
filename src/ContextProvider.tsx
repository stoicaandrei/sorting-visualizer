import React from 'react';

import { SortingProvider, ArrayProvider, AlgorithmProvider } from './contexts';

const ContextProvider: React.FC = ({ children }) => {
  return (
    <ArrayProvider>
      <AlgorithmProvider>
        <SortingProvider>{children}</SortingProvider>
      </AlgorithmProvider>
    </ArrayProvider>
  );
};

export default ContextProvider;
