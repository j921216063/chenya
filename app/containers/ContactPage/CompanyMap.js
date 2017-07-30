import styled from 'styled-components';

const CompanyMap = styled.p`
  float: right;
  /* Normal */
  @media screen and (max-width: 1280px) {
    width: 65%;
  }
  /* Mobile */
  @media screen and (max-width: 736px) {
     width: 55%;
  }
  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    float: none;
    width: 100%;
  }
`;

export default CompanyMap;
