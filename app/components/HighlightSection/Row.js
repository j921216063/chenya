import NormalRow from 'components/Row';
import styled from 'styled-components';

const Row = styled(NormalRow) `
  > * {
    padding: 100px 0 0 100px;
  }
  margin: -100px 0 -1px -100px;

  @media screen and (max-width: 1680px) {
    > * {
      padding: 80px 0 0 80px;
    }
    margin: -80px 0 -1px -80px;
  }

  @media screen and (max-width: 1280px) {
    > * {
      padding: 60px 0 0 60px;
    }
    margin: -60px 0 -1px -60px;
  }

  @media screen and (max-width: 736px) {
    > * {
      padding: 40px 0 0 40px;
    }
    margin: -40px 0 -1px -40px;
  }
`
export default Row;
