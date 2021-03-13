import React from 'react';

import {
  ArrayActions,
  SortingActions,
  Visualizer,
  AlgorithmActions,
} from './components';

function App() {
  return (
    <div className="App">
      <Visualizer />
      <ArrayActions />
      <SortingActions />
      <AlgorithmActions />
    </div>
  );
}

export default App;
