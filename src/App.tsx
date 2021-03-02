import React from 'react';

import { Visualizer } from './views';

import { SortingProvider } from './contexts';

function App() {
  return (
    <div className="App">
      <SortingProvider>
        <Visualizer />
      </SortingProvider>
    </div>
  );
}

export default App;
