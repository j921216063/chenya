import React from 'react';
import Wrapper from './Wrapper';
import Row from './Row';
import RowItem from './RowItem';
import Container from 'components/Container';

class HighlightSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <RowItem title={'This Is Important'} message={'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.'} icon={'fa-paper-plane'} />
            <RowItem title={'This Is Important'} message={'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.'} icon={'fa-pencil'} />
            <RowItem title={'This Is Important'} message={'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.'} icon={'fa-wrench'} />
          </Row>
        </Container>
      </Wrapper >
    );
  }
}

export default HighlightSection;