import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  color: #999;
  margin-top: 1.5em;
  text-align: center;
  font-size: 0.9em;
`;

const Li = styled.li`
  border-left: solid 1px #e0e0e0;
  display: inline-block;
  padding: 0 0 0 1em;
  margin: 0 0 0 1em;
  &:first-child {
    border-left: 0;
    margin-left: 0;
    padding-left: 0;
  }
  
  /* Mobile */
  @media screen and (max-width: 736px) {
    border: 0;
    padding: 0;
    margin: 0;
    display: block;
    line-height: 2em;
  }
`;

const Copyright = () => (
  <Wrapper>
    <ul>
      <Li>&copy; 2017 Cheng Ye Engineering Consultants Co., Ltd. All rights reserved</Li>
    </ul>
    <ul>
      <Li>高雄市中山二路91號12F之3</Li>
      <Li>TEL: +886-7-3343062</Li>
      <Li>FAX: +886-7-5314497</Li>
      <Li>E-MAIL: simonluv1218@gamil.com</Li>
    </ul>
  </Wrapper>
);

export default Copyright;
