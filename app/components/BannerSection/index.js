import React from 'react';
import Section from './Section';
import Header from './Header';
import H2 from './H2';
import Em from './Em';
import A from './A';
import Button from './Button';

class BannerSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Header>
          <H2>Arcana: <Em>A responsive site template freebie by <A href="http://html5up.net">HTML5 UP</A></Em></H2>
          <Button href="#">Learn More</Button>
        </Header>
      </Section >
    );
  }
}

export default BannerSection;
