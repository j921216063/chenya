import React from 'react';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import Row from './Row';
import RowItem from './RowItem';

class HighlightSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section1>
        <Container>
          <Row>
            <RowItem title={'獨立維修'} message={'每部可獨立維修保養，不必全部停機，營運效率高，維護可降低工程風險。'} icon={'fa-wrench'} />
            <RowItem title={'高效能'} message={'運轉效率比傳統式風力機提高約30%-40%。'} icon={'fa-cogs'} />
            <RowItem title={'生產製造'} message={'模組化生產可降低製造成本。'} icon={'fa-usd'} />
          </Row>
        </Container>
      </Section1 >
    );
  }
}

export default HighlightSection;
