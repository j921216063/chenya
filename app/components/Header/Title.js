import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 0 2.75em 0;
  margin: 0;
  text-align: center;
`;

const LeftTitle = styled.span`
    font-size: 4em;
    font-weight: 900;
    vertical-align: middle;
    margin-right: 15px;
    background: -webkit-linear-gradient(#2F4F4F, #00FA9A);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #00FA9A;
    opacity: 0.8;
`;

const RightContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  line-height: 1.3;
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

const Title = () => (
  <Wrapper>
    <LeftTitle>CY</LeftTitle>
    <RightContainer>
      <ChiTitle>承燁工程顧問股份有限公司</ChiTitle>
      <EngTitle>Cheng Ye Engineering Consultants Co., Ltd</EngTitle>
    </RightContainer>
  </Wrapper>
);

export default Title;
