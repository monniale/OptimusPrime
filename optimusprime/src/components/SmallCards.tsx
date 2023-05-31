import React from "react";
import videoriccardo from "../images/video-riccardo.mp4";

import pensiero2 from "../images/pensiero_02.jpg";
import pensiero3 from "../images/pensiero_03.jpg";

const blackCard = {
  backgroundColor: "#000",
  color: "#fff",
};

const whiteCard = {
  backgroundColor: "#fff",
  color: "#000",
};

const upperTitle = {
  color: "#0066cc",
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

export const SmallCards = (prop: any) => {
  if (prop.order == 0) {
    return (
      <>
        <div className="CardContainer">
          <div className="SmallCard" style={whiteCard}>
            <p style={upperTitle}>{prop.upperTitle1}</p>
            <h2>{prop.title1}</h2>
            <img src={pensiero2}></img>
          </div>
          <div className="SmallCard" style={blackCard}>
            <p style={upperTitle}>{prop.upperTitle2} </p>
            <h2>{prop.title2}</h2>
            <div className="VideoContainer">
              <video
                controls={false}
                autoPlay
                onClick={() => startVideo(prop.indiceVideo)}
                onDoubleClick={() => restartVideo(prop.indiceVideo)}
              >
                <source type="video/mp4" src={videoriccardo} />
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
          <div className="SmallCard" style={blackCard}>
            <p style={upperTitle}>{prop.upperTitle1}</p>
            <h2>{prop.title1}</h2>
            <div className="VideoContainer">
              <video
                controls={false}
                autoPlay
                onClick={() => startVideo(prop.indiceVideo)}
                onDoubleClick={() => restartVideo(prop.indiceVideo)}
              >
                <source type="video/mp4" src={videoriccardo} />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
          <div className="SmallCard" style={whiteCard}>
            <p style={upperTitle}>{prop.upperTitle2} </p>
            <h2>{prop.title2}</h2>
            <img src={pensiero3}></img>
          </div>
        </div>
      </>
    );
  }
};
