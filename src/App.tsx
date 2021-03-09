import React from 'react';

import { ArrayActions, SortingActions, Visualizer } from './views';

import { SortingProvider, ArrayProvider } from './contexts';

function App() {
  return (
    <div className="App">
      <ArrayProvider>
        <SortingProvider>
          <Visualizer />
          <ArrayActions />
          <SortingActions />
        </SortingProvider>
      </ArrayProvider>
    </div>
  );
}

export default App;
