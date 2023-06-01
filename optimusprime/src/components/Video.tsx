import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const Video = () => {
  return (
    <>
      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6BOpHCnQFKs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </>
  );
};
