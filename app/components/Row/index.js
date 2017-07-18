import styled from 'styled-components';

const Row = styled.div`
  border-bottom: solid 1px transparent;
  box-sizing: border-box;
  
  > * {
    float: left;
    box-sizing: border-box;
    padding: 50px 0 0 50px;
  }

  &:after, &:before {
    content: '';
    display: block;
    clear: both;
    height: 0;
  }
  margin: -50px 0 -1px -50px;

  @media screen and (max-width: 1680px) {
    > * {
      padding: 40px 0 0 40px;
    }
    margin: -40px 0 -1px -40px;
  }

  @media screen and (max-width: 1280px) {
    > * {
      padding: 30px 0 0 30px;
    }
    margin: -30px 0 -1px -30px;
  }
  
  @media screen and (max-width: 736px) {
    > * {
      padding: 20px 0 0 20px;
    }
    margin: -20px 0 -1px -20px;
  }

`;

export default Row;
