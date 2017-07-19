import React from 'react';
import Wrapper from './Wrapper';
import Container from 'components/Container';
import Header from './Header';
import H2 from './H2';
import P from './P';

const HeadingSection = (props) => (
  <Wrapper>
    <Container>
      <Header>
        <H2>A gigantic heading you can use for whatever</H2>
        <P>With a much smaller subtitle hanging out just below it</P>
      </Header>
    </Container>
  </Wrapper>
);

export default HeadingSection;
