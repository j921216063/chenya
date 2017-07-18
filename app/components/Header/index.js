import React from 'react';
import { FormattedMessage } from 'react-intl';
import H1 from './H1';
import Em from './Em';
import A from './A';
import Wrapper from './Wrapper';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <H1>
          <A href="index.html">Arcana <Em>by HTML5 UP</Em></A>
        </H1>
        <NavBar>
          <FormattedMessage {...messages.home} >
            {(formattedValue) => (<HeaderLink current>{formattedValue}</HeaderLink>)}
          </FormattedMessage>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </Wrapper >
    );
  }
}

export default Header;
