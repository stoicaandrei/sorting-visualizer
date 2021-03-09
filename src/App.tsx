import React from 'react';

import { ArrayActions, Visualizer } from './views';

import { SortingProvider, ArrayProvider } from './contexts';

function App() {
  return (
    <div className="App">
      <ArrayProvider>
        <SortingProvider>
          <Visualizer />
          <ArrayActions />
        </SortingProvider>
      </ArrayProvider>
    </div>
  );
}

export default App;
