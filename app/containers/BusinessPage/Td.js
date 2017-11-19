import styled from 'styled-components';

const Td = styled.td`
  background-color: ${(props) => (props.odd) ? 'rgb(220, 220, 220);' : 'rgb(239, 239, 239);'};
  padding: 0.8em;
  &:first-child {
    width: 15%;
  }
  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    width: 30%;
  }
`;

export default Td;
