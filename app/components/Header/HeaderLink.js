import styled from 'styled-components';
import React from 'react';
import NormalA from 'components/A';
import NormalLi from 'components/Li';

const A = styled(NormalA) `
  color: #c0c0c0;
  text-decoration: none;
  border: 0;
  display: block;
  padding: 1.5em 0.5em 1.35em 0.5em;
  ${(props) => (props.current) ? 'color: #fff;' : ''}
`;

const Li = styled(NormalLi) `
  position: relative;
  display: inline-block;
  margin-left: 1em;
  &:first-child {
    margin-left: 0;
  }
  &:hover ${A} {
    color: #fff;
  }
  font-weight: ${(props) => (props.current) ? '600' : 'inherit'};
  ${(props) =>
    (props.current) ?
      `&:before {
        transform: rotateZ(45deg);
        width: 0.75em;
        height: 0.75em;
        content: '';
        display: block;
        position: absolute;
        bottom: -0.5em;
        left: 50%;
        margin-left: -0.375em;
        background-color: #37c0fb;
        background-image: url("images/bg01.png");
      }` :
      ''
  }
`;

const HeaderLink = (props) => (
  <Li {...props}>
    <A {...props}>{props.children}</A>
  </Li>
);

HeaderLink.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default HeaderLink;

