import styled from 'styled-components';

const Inner = styled.div`
  margin-left: calc(30% + 2em);
  > :last-child {
    margin-bottom: 0;
  }
  
  /* Narrower */
  @media screen and (max-width: 840px) {
    margin-left: calc(20% + 2em);
  }

  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    margin-left: calc(30% + 20px);
  }
`;

export default Inner;
