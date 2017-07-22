import React from 'react';
import styled from 'styled-components';
import NormalA from 'components/A';

const Ul = styled.ul`
  text-align: center;
  margin: 0;
  cursor: default;
`;

const Li = styled.li`
  display: inline-block;
  line-height: 1em;
  padding-left: 1.5em;

  :first-child {
    padding-left: 0;
  }
`;

const A = styled(NormalA) `
  text-decoration: none;
  position: relative;
  font-size: 2em;
  border: 0;
  color: #999;
  &:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
  }
`;

const Icons = () => (
  <Ul>
    <Li><A href="#" className="fa-twitter"></A></Li>
    <Li><A href="#" className="fa-facebook"></A></Li>
    <Li><A href="#" className="fa-github"></A></Li>
    <Li><A href="#" className="fa-linkedin"></A></Li>
    <Li><A href="#" className="fa-google-plus"></A></Li>
  </Ul>
);

export default Icons;
