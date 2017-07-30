import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import H2 from 'components/H2';
import messages from './messages';
import ContactSection from './ContactSection';
import CompanyMap from './CompanyMap';

export default class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Contact Us"
          meta={[
            { name: 'description', content: 'Contact page ' },
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
              <ContactSection>
                <CompanyMap>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.5945223383878!2d120.30474694355284!3d22.609414718411635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e037b80599aaf%3A0xe176cffa49ff2cc5!2zODA26auY6ZuE5biC5YmN6Y6u5Y2A5Lit5bGx5LqM6LevOTHomZ8!5e0!3m2!1szh-TW!2stw!4v1501421697687"
                    width="700"
                    height="350"
                    frameBorder="0"
                    style={{ border: 0, maxWidth: '100%' }}
                    allowFullScreen
                  >
                  </iframe>
                </CompanyMap>
                <h3>
                  <FormattedMessage {...messages.company} />
                </h3>
                <p>
                  <strong>諮詢專線：</strong>+886-7-3343062
                <br />
                  <strong>傳真專線：</strong>+886-7-5314497
                <br />
                  <strong>客服信箱：</strong><a href="mailto:simonluv1218@gamil.com">simonluv1218@gamil.com</a>
                  <br />
                  <strong>公司地址：</strong>高雄市中山二路91號12F之3
                <br />
                </p>
              </ContactSection>
            </article>
          </Container>
        </Section1>
      </div>
    );
  }
}
