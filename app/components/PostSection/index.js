import React from 'react';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import Row from 'components/Row';
import H3 from 'components/H3';
import { FormattedMessage } from 'react-intl';
import RowItem from './RowItem';
import Box from './Box';
import A from './A';
import Img from './Img';
import Inner from './Inner';
import pic01 from './pic01.jpg';
import pic02 from './pic02.jpg';
import pic03 from './pic03.jpg';
import pic04 from './pic04.jpg';
import messages from './messages';

const PostSection = () => (
  <Section1>
    <Container>
      <Row>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic01} /></A>
            <Inner>
              <H3><FormattedMessage {...messages.title1} /></H3>
              <p><FormattedMessage {...messages.subtitle1} /></p>
            </Inner>
          </Box>
        </RowItem>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic02} /></A>
            <Inner>
              <H3><FormattedMessage {...messages.title2} /></H3>
              <p><FormattedMessage {...messages.subtitle2} /></p>
            </Inner>
          </Box>
        </RowItem>
      </Row>
      <Row>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic03} /></A>
            <Inner>
              <H3><FormattedMessage {...messages.title3} /></H3>
              <p><FormattedMessage {...messages.subtitle3} /></p>
            </Inner>
          </Box>
        </RowItem>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic04} /></A>
            <Inner>
              <H3><FormattedMessage {...messages.title4} /></H3>
              <p><FormattedMessage {...messages.subtitle4} /></p>
            </Inner>
          </Box>
        </RowItem>
      </Row>
    </Container>
  </Section1>
);

export default PostSection;
