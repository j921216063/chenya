import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import DisplayItem from 'components/DisplayItem';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import H2 from 'components/H2';
import Icon1 from './lw1.png';
import Icon2 from './lw2.png';
import Icon3 from './lw3.png';
import messages from './messages';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const StyledItem = styled(DisplayItem) `
  font-weight: 400;
  flex: none;
  width:33%;

  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    width: 100%;
    flex: none;
  }
`;

const LargeWindSection = () => (
  <Section1>
    <Container>
      <header>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
      </header>
      <Wrap>
        <StyledItem title="市區大型風塔" image={Icon1} />
        <StyledItem title="西藏轉經輪設計" image={Icon2} />
        <StyledItem title="各規模電廠" image={Icon3} />
      </Wrap>
    </Container>
  </Section1>
);

export default LargeWindSection;
