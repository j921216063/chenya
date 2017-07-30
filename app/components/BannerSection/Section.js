import styled from 'styled-components';
import banner from './banner.jpg';
import windpower from './windpower.png';
export default styled.section`
  background-image:url(${banner});
  background-position: center center, center center;
  background-size: cover, cover;
  height: 28em;
  text-align: center;
  position: relative;
  &:before {
    transform: rotate(12deg);
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    background-image: url(${windpower});
    background-position: center center;
    background-size: contain;
  }
`;
