import styled from 'styled-components';

const TextFamily = styled.span`
  flex: 0 47%;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin-top: 20px;
 /* Normal */
  @media screen and (max-width: 1280px) {
      font-size: 20px;
   }
  /* Mobile */
  @media screen and (max-width: 736px) {
   }
  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    font-size:15px
  }
`;

export default TextFamily;
