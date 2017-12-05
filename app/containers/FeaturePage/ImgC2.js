import styled from 'styled-components';
import ImgOri from 'components/Img';

const Img = styled(ImgOri) `
  width: 20%;
  right: 0;
  top: -60px;
  position: absolute;
  /* Normal */
  @media screen and (max-width: 1280px) {
    width: 15%;
    right: -40px;
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
