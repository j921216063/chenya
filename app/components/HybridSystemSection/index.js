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

const HybridSystemSection = () => (
  <Section1>
    <Container>
      <header>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
      </header>
      <Wrap>
        <FormattedMessage {...messages.title1} >
          {(message) => (<StyledItem title={message} titlebg="#3CBABC" image={Icon1} subtitle="Yard And Street Light Monitoring System" />)}
        </FormattedMessage>
        <FormattedMessage {...messages.title2} >
          {(message) => (<StyledItem title={message} titlebg="#37A2A2" image={Icon2} subtitle="Container House Combination" />)}
        </FormattedMessage>
        <FormattedMessage {...messages.title3} >
          {(message) => (<StyledItem title={message} titlebg="#359392" image={Icon3} subtitle="Exhibition Field Wisely Used" />)}
        </FormattedMessage>
      </Wrap>
    </Container>
  </Section1>
);

export default HybridSystemSection;
