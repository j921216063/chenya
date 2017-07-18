import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1400px;
  @media screen and (max-width: 1680px) {
    width: 1200px;
  }

  @media screen and (max-width: 1280px) {
    width: 960px;
  }

  @media screen and (max-width: 980px) {
    width: 95%;
  }

  @media screen and (max-width: 840px) {
    width: 95% !important;
  }

  @media screen and (max-width: 736px) {
    width: 90% !important;
  }

  @media screen and (max-width: 480px) {
    width: 100% !important;
  }
`;

export default Container;