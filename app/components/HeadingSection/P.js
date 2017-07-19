import styled from 'styled-components';

const P = styled.p`
position: relative;
  border-top: solid 1px #e0e0e0;
  padding: 1em 0 0 0;
  margin: 0;
  top: -1em;
  font-size: 1.5em;
  letter-spacing: -0.025em;

  /* Narrower */
  @media screen and (max-width: 840px) {
    top: -0.25em;
    font-size: 1.25em;
  }

  /* Mobile */
  @media screen and (max-width: 736px) { 
    top: 0;
    margin-top: 1.25em;
    font-size: 1em;
  }
`;

export default P;
