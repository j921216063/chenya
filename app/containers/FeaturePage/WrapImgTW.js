import styled from 'styled-components';

const WrapImg = styled.div`
  flex: 0 50%;
  text-align:center;
  padding: 20px 0px;
  /* Mobile (Portrait) */
  @media screen and (max-width: 736px) {
      flex: 0 100%;
  }
`;

export default WrapImg;
