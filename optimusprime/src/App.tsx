import React from 'react';
import { NavBar } from './components/NavBar';
import { Team } from './components/Team';
import { Video } from './components/Video';
import { BigCards } from './components/BigCards';

import './App.css';
import { SmallCard } from './components/SmallCard';
import audio from './components/assets/audio.mp3';
import video from './components/assets/video.mp4';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        <h1>OptimusPrime</h1>
        <p className="SubTitle">Risolviamo problemi di ottimo in modo da semplificare la vita alle persone, in modo semplice ed efficace. Quest'oggi presentiamo un problema di ottimo riguardante il volume di un Cilindro</p>
      </div>

      <BigCards order="0" upperTitle1="Problema" title1="Titolo dell'Esercizio" comp1="prova" upperTitle2="BrainStorming" title2="Cosa abbiamo pensato?" comp2="prova" />
      <BigCards order="1" upperTitle1="Problema" title1="Titolo dell'Esercizio" comp1="prova" upperTitle2="BrainStorming" title2="Cosa abbiamo pensato?" comp2="prova" />

      <h2 className="SubHeader">Come Abbiamo Proceduto</h2>
      
      
      <div className='CardContainer'>
      <SmallCard title="Titolo" subtitle="Sottotitolo" comp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi repellendus ipsum tempora repudiandae enim facilis, nesciunt tempore maxime dicta doloribus atque debitis eaque impedit deleniti voluptas. At, doloribus commodi." />
      <SmallCard title="Titolo" subtitle="Sottotitolo" comp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi repellendus ipsum tempora repudiandae enim facilis, nesciunt tempore maxime dicta doloribus atque debitis eaque impedit deleniti voluptas. At, doloribus commodi." />
      <SmallCard title="Titolo" subtitle="Sottotitolo" comp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi repellendus ipsum tempora repudiandae enim facilis, nesciunt tempore maxime dicta doloribus atque debitis eaque impedit deleniti voluptas. At, doloribus commodi." />
      <SmallCard title="Titolo" subtitle="Sottotitolo" comp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi repellendus ipsum tempora repudiandae enim facilis, nesciunt tempore maxime dicta doloribus atque debitis eaque impedit deleniti voluptas. At, doloribus commodi." />
      </div>

      <h2 className="SubHeader">Ecco la Soluzione Completa</h2>

      <Video></Video>

      <div className="audio-container">
                <audio controls={true}>
                    <source type="audio/mp3" src={audio} />
                    Your browser does not support the audio element.
                </audio>
      </div>
      
      <Team></Team>
    </div>
  );
}

export default App;
