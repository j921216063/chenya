import React from 'react';
import Container from 'components/Container';
import { FormattedMessage } from 'react-intl';
import Wrapper from './Wrapper';
import Header from './Header';
import H2 from './H2';
import P from './P';
import messages from './messages';

const HeadingSection = () => (
  <Wrapper>
    <Container>
      <Header>
        <H2><FormattedMessage {...messages.title} /></H2>
        <P><FormattedMessage {...messages.subtitle} /></P>
      </Header>
    </Container>
  </Wrapper>
);

export default HeadingSection;
