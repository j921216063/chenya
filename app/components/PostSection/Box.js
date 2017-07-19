import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  margin: 0 0 2em 0;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

export default Box;
