import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import DisplayItem from 'components/DisplayItem';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import H1 from 'components/H1';
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
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
      </header>
      <Wrap>
        <FormattedMessage {...messages.city} >
          {(formattedValue) => (<StyledItem title={formattedValue} image={Icon1} subtitle="Large Wind Tower In City" />)}
        </FormattedMessage>
        <FormattedMessage {...messages.wheel} >
          {(formattedValue) => (<StyledItem title={formattedValue} image={Icon2} subtitle="Tibet Prayer Wheel Design" />)}
        </FormattedMessage>
        <FormattedMessage {...messages.farms} >
          {(formattedValue) => (<StyledItem title={formattedValue} image={Icon3} subtitle="Wind Farms of Various Size" />)}
        </FormattedMessage>
      </Wrap>
    </Container>
  </Section1>
);
export default LargeWindSection;
