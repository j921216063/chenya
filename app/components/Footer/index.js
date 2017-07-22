import React from 'react';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import Icons from './Icons';
import Copyright from './Copyright';

function Footer() {
  return (
    <Wrapper>
      <Icons />
      <Copyright />
      <section>
        <LocaleToggle />
      </section>
    </Wrapper>
  );
}

export default Footer;
