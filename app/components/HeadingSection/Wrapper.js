import styled from 'styled-components';
import bg01 from './bg01.png';
import bg02 from './bg02.png';
import bg03 from './bg03.png';

const Wrapper = styled.section`
  padding: 5em 0 3em 0;
  background-color: #fff;
  background-image: url(${bg02}), url(${bg03}), url(${bg01});
  background-position: top left, bottom left, top left;
  background-size: 100% 6em, 100% 6em, auto;
  background-repeat: no-repeat, no-repeat, repeat;
  
  @media screen and (max-width: 1280px) {
    padding: 3em 0 1em 0;
  }
  
  @media screen and (max-width: 480px) {
    padding: 2em 20px 1px 20px;
  }
`;

export default Wrapper;
