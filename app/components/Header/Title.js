import React from 'react';
import styled from 'styled-components';
import ImgNormal from 'components/Img';
import LocaleToggle from 'containers/LocaleToggle';
import { FormattedMessage } from 'react-intl';
import logo from './logo.png';
import messages from './messages';

const Wrapper = styled.div`
  padding: 0 0 2.75em 0;
  margin: 0;

  @media screen and (max-width: 480px){
    text-align: center;
    font-size: 0.8em;
  }

`;

const Img = styled(ImgNormal) `
  width: 5em;
  vertical-align: middle;
  margin-right: 0.3em;
  @media screen and (max-width: 480px){
    width: 6em;
  }
  @media screen and (max-width: 320px){
    width: 4.5em;
  }
`;

const RightContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  line-height: 1.5;
  text-align: left;
`;

const ChiTitle = styled.div`
  font-weight: bold;
  font-size: 1.5em;
`;

const EngTitle = styled.div`
  font-weight: bold;
  font-size: 1em;
  color: #808080;
`;

const StyledToggle = styled(LocaleToggle) `
  float: right;
  margin-right: 30px;
`;

const Title = () => (
  <Wrapper>
    <Img src={logo} alt="" />
    <RightContainer>
      <ChiTitle><FormattedMessage {...messages.company} /></ChiTitle>
      <EngTitle>Cheng Ye Engineering Consultants Co., Ltd</EngTitle>
    </RightContainer>
    <StyledToggle />
  </Wrapper>
);

export default Title;
