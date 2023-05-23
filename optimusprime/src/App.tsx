import React from 'react';
import { NavBar } from './components/NavBar';
import { Team } from './components/Team';

import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        <p>Abbiamo cercato di realizzare...</p>
      </div>
      <Team></Team>
    </div>
  );
}

export default App;
