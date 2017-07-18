import styled from 'styled-components';
import bg01 from './bg01.png';

export default styled.nav`
  cursor: default;
  background-color: #333;
  background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.3)), url(${bg01});
  padding: 0;
    &:after {
    content: '';
    display: block;
    width: 100%;
    height: 0.75em;
    background-color: #37c0fb;
    background-image: url(${bg01});
  }
`;
