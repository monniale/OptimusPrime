import React from "react";
import { NavBar } from "./components/NavBar";
import { Team } from "./components/Team";
import { Video } from "./components/Video";
import { BigCards } from "./components/BigCards";

import pensiero1 from "./images/pensiero_01.jpg";

import "./App.css";
import { SmallCards } from "./components/SmallCards";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        <h1>OptimusPrime</h1>
        <p className="SubTitle">
          Risolviamo problemi di ottimo in modo da semplificare la vita alle
          persone, in modo semplice ed efficace. Quest'oggi presentiamo un
          problema di ottimo riguardante il volume di un Cilindro
        </p>
      </div>

      <BigCards
        order="0"
        indiceVideo="0"
        upperTitle1="Problema"
        title1="Titolo dell'Esercizio"
        comp1="prova"
        upperTitle2="BrainStorming"
        title2="Cosa abbiamo pensato?"
        comp2="prova"
      />
      <BigCards
        order="1"
        indiceVideo="1"
        title1="Il Pianeta Terra"
        comp1="prova"
        upperTitle2="BrainStorming"
        comp2={pensiero1}
      />

      <h2 className="SubHeader">Come Abbiamo Proceduto</h2>

      <SmallCards
        order="0"
        indiceVideo="2"
        upperTitle1="Risoluzione"
        title2="E se lo facessimo cosi?"
      />
      <SmallCards
        order="1"
        indiceVideo="3"
        title1="E adesso diventa un Cilindro!"
        upperTitle2="Nella Strada giusta"
      />

      <h2 className="SubHeader">Ecco la Soluzione Completa</h2>
      <Video></Video>

      <h2 className="SubHeader">Il Nostro Team</h2>
      <Team></Team>

      <Footer />
    </div>
  );
}

export default App;
