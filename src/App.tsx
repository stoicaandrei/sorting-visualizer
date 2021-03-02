import React from 'react';

import { Visualizer } from './views';

import { SortingProvider, ArrayProvider } from './contexts';

function App() {
  return (
    <div className="App">
      <ArrayProvider>
        <SortingProvider>
          <Visualizer />
        </SortingProvider>
      </ArrayProvider>
    </div>
  );
}

export default App;
