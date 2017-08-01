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
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  @media screen and (max-width: 840px) {
    height: 20em;
  }

  @media screen and (max-width: 736px) {
    height: 20em;
  }

  @media screen and (max-width: 480px) {
    height: 15em;
  }
`;

export default Image;
