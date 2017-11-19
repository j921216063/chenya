import React from 'react';
import { FormattedMessage } from 'react-intl';
import Wrapper from './Wrapper';
import NavBar from './NavBar';
import NavItem from './NavItem';
import messages from './messages';
import Title from './Title';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Title />
        <NavBar>
          <FormattedMessage {...messages.home} >
            {(formattedValue) => (<NavItem to="/" index>{formattedValue}</NavItem>)}
          </FormattedMessage>
          <NavItem to="/about">
            <FormattedMessage {...messages.aboutus} />
          </NavItem>
          <NavItem to="/features">
            <FormattedMessage {...messages.features} />
          </NavItem>
          <NavItem to="/business">
            <FormattedMessage {...messages.business} />
          </NavItem>
          <NavItem to="/actualperform">
            <FormattedMessage {...messages.actualperform} />
          </NavItem>
          <NavItem to="/contact">
            <FormattedMessage {...messages.contactus} />
          </NavItem>
        </NavBar>
      </Wrapper >
    );
  }
}

export default Header;
