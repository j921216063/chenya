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
      <Li>&copy; Untitled. All rights reserved</Li>
      <Li>Design:</Li>
    </ul>
  </Wrapper>
);

export default Copyright;
