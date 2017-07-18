/**
 * A link to a certain page, an anchor tag
 */
import styled from 'styled-components';

const A = styled.a`
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
  color: #37c0fb;
  text-decoration: none;
  border-bottom: dotted 1px;

  &:hover {
    color: #37c0fb;
    border-bottom-color: transparent;
  }
`;

export default A;
