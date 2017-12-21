import React from 'react';
import { FormattedMessage } from 'react-intl';
import Section from './Section';
import Header from './Header';
import H2 from './H2';
import Em from './Em';
import Button from './Button';
import messages from './messages';

class BannerSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Header>
          <H2><FormattedMessage {...messages.title} /> - <Em><FormattedMessage {...messages.subtitle} /></Em></H2>
          <Button to="/features"><FormattedMessage {...messages.more} /></Button>
        </Header>
      </Section >
    );
  }
}

export default BannerSection;
