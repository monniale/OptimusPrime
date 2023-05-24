import React from 'react';
import ReactPlayer from 'react-player';

export const BigCards = (prop:any) => {
    return (
        <>
            <div className="BigCard">
                <p>{prop.upperTitle1}</p>
                <h2>{prop.title1}</h2>
                <img src={prop.comp1}></img>
            </div>  
            <div className="BigCard">
                <p>{prop.upperTitle2} </p>
                <h2>{prop.title2}</h2>
                <ReactPlayer url={prop.comp2} controls={true} />
            </div>
        </>
    )
};