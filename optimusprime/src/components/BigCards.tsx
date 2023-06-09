import React from "react";
import videomonni from "../images/video-monni.mp4";
import videoandrea from "../images/video-andrea.mp4";

import pensiero1 from "../images/pensiero_01.jpg";

const blackCard = {
  backgroundColor: "#000",
  color: "#fff",
};

const whiteCard = {
  backgroundColor: "#fff",
  color: "#000",
};

let alreadyClicked = false;
function startVideo(index: any) {
  const video = document.getElementsByTagName("video")[index];
  if (alreadyClicked) {
    video.pause();
    alreadyClicked = !alreadyClicked;
  } else {
    video.play();
    alreadyClicked = !alreadyClicked;
  }
}

function restartVideo(index: any) {
  const video = document.getElementsByTagName("video")[index];
  video.currentTime = 0;
}

export const BigCards = (prop: any) => {
  if (prop.order == 0) {
    return (
      <>
        <div className="CardContainer">
          <div className="BigCard" style={whiteCard}>
            <p>{prop.upperTitle1}</p>
            <h2>{prop.title1}</h2>
            <p className="LaTex">
              Fra tutti i recipienti a forma cilindrica di uguale superficie S,
              determina quello di volume massimo
            </p>
          </div>
          <div className="BigCard" style={blackCard}>
            <p>{prop.upperTitle2} </p>
            <h2>{prop.title2}</h2>
            <div className="VideoContainer">
              <video
                controls={false}
                autoPlay
                onClick={() => startVideo(prop.indiceVideo)}
                onDoubleClick={() => restartVideo(prop.indiceVideo)}
              >
                <source type="video/mp4" src={videoandrea} />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="CardContainer">
          <div className="BigCard" style={blackCard}>
            <h2>{prop.title1}</h2>
            <div className="VideoContainer">
              <video
                controls={false}
                autoPlay
                onClick={() => startVideo(prop.indiceVideo)}
                onDoubleClick={() => restartVideo(prop.indiceVideo)}
              >
                <source type="video/mp4" src={videomonni} />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
          <div className="BigCard" style={whiteCard}>
            <p>{prop.upperTitle2} </p>
            <h2>{prop.title2}</h2>
            <img src={pensiero1}></img>
          </div>
        </div>
      </>
    );
  }
};
