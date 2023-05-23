import styled from "styled-components";

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
    `


export const Video = () => {
    return (
        <>
           <VideoContainer>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2QKg5SZ_35I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           </VideoContainer>
        </>

    )
}