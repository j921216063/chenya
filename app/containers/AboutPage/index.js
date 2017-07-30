import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import H2 from 'components/H2';
import messages from './messages';
import Image from './Image';

export default class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="About Us"
          meta={[
            { name: 'description', content: 'About page ' },
          ]}
        />
        <Section1>
          <Container>
            <article>
              <header>
                <H2>
                  <FormattedMessage {...messages.header} />
                </H2>
              </header>
              <Image />
              <h3>
                <FormattedMessage {...messages.introHeader} />
              </h3>
              <p>
                <FormattedMessage {...messages.introContent} />
              </p>
            </article>
          </Container>
        </Section1>
      </div>
    );
  }
}
