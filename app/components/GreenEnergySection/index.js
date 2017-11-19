import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import H2 from 'components/H2';
import Img from 'components/Img';
import Icon1 from './icon1.png';
import Icon2 from './icon2.png';
import Icon3 from './icon3.png';
import Icon4 from './icon4.png';
import messages from './messages';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ImageBox = styled.div`
  padding: 45px;
  width: 48%;
  img {
    width:100%;
  }
`;

const GreenEnergySection = () => (
  <Section1>
    <Container>
      <header>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
      </header>
      <Wrap>
        <ImageBox>
          <Img src={Icon1} alt="" />
        </ImageBox>
        <ImageBox>
          <Img src={Icon2} alt="" />
        </ImageBox>
        <ImageBox>
          <Img src={Icon3} alt="" />
        </ImageBox>
        <ImageBox>
          <Img src={Icon4} alt="" />
        </ImageBox>
      </Wrap>
    </Container>
  </Section1>
);

export default GreenEnergySection;
