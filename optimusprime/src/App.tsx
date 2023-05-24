import React from 'react';
import { NavBar } from './components/NavBar';
import { Team } from './components/Team';
import { Video } from './components/Video';

import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        <h1>OptimusPrime</h1>
        <p className="SubTitle">Risolviamo problemi di ottimo in modo da semplificare la vita alle persone, in modo semplice ed efficace.
Quest’oggi presentiamo un problema di ottimo riguardante il volume di un Cilindro</p>
      </div>
      <Video></Video>
      <Team></Team>
    </div>
  );
}

export default App;
