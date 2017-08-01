import styled from 'styled-components';
import { Link } from 'react-router';

const Button = styled(Link)`
  vertical-align: middle;
  margin-left: 1em;

  @media screen and (max-width: 480px) {
    display: none;
  }

`;
export default Button;
