import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import H1 from 'components/H1';
import Img from 'components/Img';
import result1 from './result1.png';
import result2 from './result2.png';
import result3 from './result3.png';
import result4 from './result4.png';
import result5 from './result5.png';

import messages from './messages';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImageBox = styled.div`
  padding: 30px;
  width: 33%;
  img {
    width:100%;
  }
`;

const ActualResultSection = () => (
  <Section1>
    <Container>
      <header>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
      </header>

      <Wrap>
        <ImageBox>
          <Img src={result1} alt="" />
        </ImageBox>
        <ImageBox>
          <Img src={result2} alt="" />
        </ImageBox>
        <ImageBox>
          <Img src={result3} alt="" />
        </ImageBox>
      </Wrap>
      <Wrap>
        <ImageBox>
          <Img src={result4} alt="" />
        </ImageBox>
        <ImageBox>
          <Img src={result5} alt="" />
        </ImageBox>
      </Wrap>

    </Container>
  </Section1>
);

export default ActualResultSection;
