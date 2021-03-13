import React from 'react';

import { SortingProvider, ArrayProvider } from './contexts';

const ContextProvider: React.FC = ({ children }) => {
  return (
    <ArrayProvider>
      <SortingProvider>{children}</SortingProvider>
    </ArrayProvider>
  );
};

export default ContextProvider;
