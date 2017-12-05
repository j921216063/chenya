import styled from 'styled-components';
import ImgOri from 'components/Img';

const Img = styled(ImgOri)`
  position: absolute;
  width: 15%;
  bottom: 0;
  /* Normal */
  @media screen and (max-width: 1280px) {
    width: 10%;
  }
  /* Mobile */
  @media screen and (max-width: 736px) {
     display: none;
  }
  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
  }
`;

export default Img;
