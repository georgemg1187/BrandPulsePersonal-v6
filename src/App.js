import React from 'react';
import Page from './components/Page';

import AppState from './context/app/AppState'

function App() {
  return (
    <AppState>
      <Page />
    </AppState>
  );
}

export default App;
