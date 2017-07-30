import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 5em 0 3em 0;
  background: #fff;
  /* Normal */
  @media screen and (max-width: 1280px) {
    padding: 3em 0 1em 0;
  }
  /* Mobile */
  @media screen and (max-width: 736px) {
     padding: 2em 0 1px 0;
  }
  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    padding: 2em 20px 1px 20px;
  }
`;

export default Wrapper;
