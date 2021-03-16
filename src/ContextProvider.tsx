import React from 'react';

import * as providers from './contexts';

const ContextProvider: React.FC = ({ children }) => {
  return (
    <providers.ArrayProvider>
      <providers.AlgorithmProvider>
        <providers.StatusProvider>
          <providers.SortingProvider>{children}</providers.SortingProvider>
        </providers.StatusProvider>
      </providers.AlgorithmProvider>
    </providers.ArrayProvider>
  );
};

export default ContextProvider;
