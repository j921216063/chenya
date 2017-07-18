import NormalA from 'components/A';
import styled from 'styled-components';

const A = styled(NormalA)`
  color: inherit;
  border-bottom-color: rgba(255, 255, 255, 0.5);
  &:hover {
    border-bottom-color: transparent;
  }
`;

export default A;
