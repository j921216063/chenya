import React from 'react';
import styled from 'styled-components';
import intro from './intro.mp4';
const VideoBox = styled.span`
  border: 0;
  display: inline-block;
  position: relative;
  border-radius: 5px;
  margin: 0 0 2em 0;
  height: 20em;
  width: 100%;
  text-align: center;
  background: black;
  border: 2px solid;
`;

const VideoContent = () => (
  <video height="100%" style={{ maxWidth: '100%' }} controls autoPlay>
    <source src={intro} type="video/mp4" />
    Your browser does not support the video tag.
</video>
);
const Video = () => (
  <VideoBox>
    <VideoContent />
  </VideoBox>
);
export default Video;
