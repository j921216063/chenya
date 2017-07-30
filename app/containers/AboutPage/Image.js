import styled from 'styled-components';
import banner from './banner.jpg';

const Image = styled.span`
  border: 0;
  display: inline-block;
  position: relative;
  border-radius: 5px;
  margin: 0 0 2em 0;
  height: 20em;
  background: url(${banner});
  background-position: center -8em;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`;

export default Image;
