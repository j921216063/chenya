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
    <Li><A target="_blank" href="https://www.facebook.com/%E6%89%BF%E7%87%81%E5%B7%A5%E7%A8%8B%E9%A1%A7%E5%95%8F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-163975404154538/" className="fa-facebook"></A></Li>
    <Li><A href="#" className="fa-github"></A></Li>
    <Li><A href="#" className="fa-linkedin"></A></Li>
    <Li><A href="#" className="fa-google-plus"></A></Li>
  </Ul>
);

export default Icons;
