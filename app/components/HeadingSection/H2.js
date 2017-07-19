import styled from 'styled-components';
import NormalH2 from 'components/H2';

const H2 = styled(NormalH2)`
	font-size: 2.25em;

  /* Narrower */
  @media screen and (max-width: 840px) {
    font-size: 1.75em;
  }

  /* Mobile */
	@media screen and (max-width: 736px) {
    font-size: 1.25em;
  }
`;

export default H2;
