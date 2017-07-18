import { css } from 'styled-components';
import bg01 from './bg01.png';

// const buttonStyles = css`
//   display: inline-block;
//   box-sizing: border-box;
//   padding: 0.25em 2em;
//   text-decoration: none;
//   border-radius: 4px;
//   -webkit-font-smoothing: antialiased;
//   -webkit-touch-callout: none;
//   user-select: none;
//   cursor: pointer;
//   outline: 0;
//   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
//   font-weight: bold;
//   font-size: 16px;
//   border: 2px solid #41addd;
//   color: #41addd;

//   &:active {
//     background: #41addd;
//     color: #fff;
//   }
// `;

const buttonStyles = css`
  appearance: none;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.15)), url(${bg01});
  background-color: #37c0fb;
  border-radius: 5px;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  padding: 0 1.5em;
  line-height: 2.75em;
  min-width: 9em;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: -0.025em;

  &:hover {
    background-color: #50c8fb;
    color: #fff !important;
  }

  &:active {
    background-color: #1eb8fb;
    color: #fff;
  }
`;

export default buttonStyles;
