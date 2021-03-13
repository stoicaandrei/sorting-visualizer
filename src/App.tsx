import React from 'react';

import { ArrayActions, SortingActions, Visualizer } from './components';

function App() {
  return (
    <div className="App">
      <Visualizer />
      <ArrayActions />
      <SortingActions />
    </div>
  );
}

export default App;
