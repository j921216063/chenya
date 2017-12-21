import React from 'react';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import Row from './Row';
import RowItem from './RowItem';
import messages from './messages';

class HighlightSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section1>
        <Container>
          <Row>
            <RowItem title={messages.fstTitle} message={messages.fstMessage} icon={'fa-wrench'} />
            <RowItem title={messages.secTitle} message={messages.secMessage} icon={'fa-cogs'} />
            <RowItem title={messages.thirdTitle} message={messages.thirdMessage} icon={'fa-usd'} />
          </Row>
        </Container>
      </Section1 >
    );
  }
}

export default HighlightSection;
