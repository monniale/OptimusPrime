import React from 'react';
import audio from '../images/audioprova.mp3';

export const BigCards = (prop:any) => {


    const start = () => {
        audio.play();
    }
    return (
        <>
            <div className="BigCard">
                <p>{prop.upperTitle1}</p>
                <h2>{prop.title1}</h2>
                <img src={prop.comp1}></img>
                <button onClick={start}>Play</button>
            </div>  
            <div className="BigCard">
                <p>{prop.upperTitle2} </p>
                <h2>{prop.title2}</h2>
            </div>
        </>
    )
};