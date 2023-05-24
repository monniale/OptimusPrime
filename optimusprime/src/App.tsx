import React from 'react';
import { NavBar } from './components/NavBar';
import { Team } from './components/Team';
import { Video } from './components/Video';
import { BigCards } from './components/BigCards';

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

      <BigCards order="0" upperTitle1="ciao" title1="" comp1="" upperTitle2="cane" title2="" comp2="../images/videoprova.mp4">

      </BigCards>


      <Video></Video>
      <Team></Team>
    </div>
  );
}

export default App;
