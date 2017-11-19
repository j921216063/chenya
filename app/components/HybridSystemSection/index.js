import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import DisplayItem from 'components/DisplayItem';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import H2 from 'components/H2';
import Icon1 from './icon1.png';
import Icon2 from './icon2.png';
import Icon3 from './icon3.png';
import messages from './messages';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const StyledItem = styled(DisplayItem) `
  font-weight: 400;
  flex:1;
  padding: 0px 45px;
`;

const HybridSystemSection = () => (
  <Section1>
    <Container>
      <header>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
      </header>
      <Wrap>
        <StyledItem title="庭院街燈監視系統" titlebg="#3CBABC" image={Icon1} />
        <StyledItem title="貨櫃屋結合" titlebg="#37A2A2" image={Icon2} />
        <StyledItem title="展場活用場地" titlebg="#359392" image={Icon3} />
      </Wrap>
    </Container>
  </Section1>
);

export default HybridSystemSection;
