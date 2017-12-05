import styled from 'styled-components';
import Td from './Td';

const TdHead = styled(Td)`
  background: #666666;
  color: white;
  font-weight: 400;

   /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    &:first-child {
      width: 30%;
    }
  }
`;

export default TdHead;
