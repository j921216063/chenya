import styled from 'styled-components';
import NormalA from 'components/A';

const A = styled(NormalA) `
  border: 0;
  border-radius: 5px;
  width: 30%;
  margin: 0;
  display: block;
  float: left;
  margin: 0 2em 2em 0;
  position: relative;
  top: 0.25em;

  /* Narrower */
  @media screen and (max-width: 840px) {
    width: 20%;
  }

  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    width: 30%; 
  }
  
`;

export default A;
