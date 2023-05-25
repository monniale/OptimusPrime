import React from 'react';
import video1 from '../images/monnii.webm';

const blackCard = {
    backgroundColor: '#000',
    color: '#fff',
}

const whiteCard = {
    backgroundColor: '#fff',
    color: '#000',
}

let alreadyClicked = false;
function startVideo() {
    const video = document.getElementsByTagName('video')[0];
    if (alreadyClicked) {
        video.pause();
        alreadyClicked = !alreadyClicked;
    } else {
        video.play();
        alreadyClicked = !alreadyClicked;
    }
}

function restartVideo() {
    const video = document.getElementsByTagName('video')[0];
    video.currentTime = 0;
}


export const BigCards = (prop:any) => {
    if (prop.order == 0){
    return (
        <>
            <div className="CardContainer">
            <div className="BigCard" style={blackCard}>
                <p>{prop.upperTitle1}</p>
                <h2>{prop.title1}</h2>
                <p>{prop.comp1}</p>
            </div>  
            <div className="BigCard" style={whiteCard}>
                <p>{prop.upperTitle2} </p>
                <h2>{prop.title2}</h2>
                <div className="VideoContainer">
                <video controls={false} autoPlay  onClick={startVideo} onDoubleClick={restartVideo}>
                    <source type="video/mp4" src={video1} />
                    Your browser does not support the video element.
                </video>
      </div>
            </div>
            </div>
        </>
    )} else {
        return (
            <>
            <div className="CardContainer">
            <div className="BigCard" style={whiteCard}>
                <p>{prop.upperTitle1}</p>
                <h2>{prop.title1}</h2>
                <div className="VideoContainer">
                <video controls={false} autoPlay  onClick={startVideo} onDoubleClick={restartVideo}>
                    <source type="video/mp4" src={video1} />
                    Your browser does not support the video element.
                </video>
      </div>
            </div>  
            <div className="BigCard" style={blackCard}>
                <p>{prop.upperTitle2} </p>
                <h2>{prop.title2}</h2>
                <p>{prop.comp2}</p>
            </div>
            </div>
        </>
    )

}};