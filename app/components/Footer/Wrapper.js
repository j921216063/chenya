import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 4em 0 8em 0;
  
  /* Normal */
  @media screen and (max-width: 1280px) {
    padding: 3em 0 3em 0;
  }

  /* Narrower */
  @media screen and (max-width: 840px) {
    text-align: center;
  }
`;

export default Wrapper;
