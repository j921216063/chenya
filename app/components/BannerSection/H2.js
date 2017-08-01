import NormalH2 from 'components/H2';
import styled from 'styled-components';

const H2 = styled(NormalH2)`
  display: inline-block;
  margin: 0;
  font-size: 2em;
  vertical-align: middle;
  @media screen and (max-width: 480px) {
    font-size: 1.5em;
  }
`;

export default H2;
