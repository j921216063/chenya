import React from 'react';
import Section from './Section';
import Header from './Header';
import H2 from './H2';
import Em from './Em';
import Button from './Button';

class BannerSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Header>
          <H2>國產新型風將問世 - <Em>台灣之光</Em></H2>
          <Button href="#">了解更多</Button>
        </Header>
      </Section >
    );
  }
}

export default BannerSection;
