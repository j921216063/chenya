import styled from 'styled-components';
import React, { PropTypes } from 'react';
import { Link, IndexLink, withRouter } from 'react-router';
import NormalLi from 'components/Li';

const StyledLink = styled(Link) `
  color: #c0c0c0;
  text-decoration: none;
  border: 0;
  display: block;
  padding: 1.5em 0.5em 1.35em 0.5em;
  @media screen and (max-width: 480px) {
    padding: 1.5em 0.3em 1.35em 0.3em;
  }
  @media screen and (max-width: 420px) {
    padding: 1.5em 1em 1.35em 1em;
  }
`;

const StyledIndexLink = styled(IndexLink) `
  color: ${(props) => (props.current) ? '#fff' : '#c0c0c0'};
  text-decoration: none;
  border: 0;
  display: block;
  padding: 1.5em 0.5em 1.35em 0.5em;
  @media screen and (max-width: 480px) {
    padding: 1.5em 0.3em 1.35em 0.3em;
  }
  @media screen and (max-width: 420px) {
    padding: 1.5em 1em 1.35em 1em;
  }
  
`;

const Li = styled(NormalLi) `
  position: relative;
  display: inline-block;
  margin-left: 1em;
  &:first-child {
    margin-left: 0;
  }
  &:hover a {
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
  @media screen and (max-width: 480px) {
    margin-left: 0.5em
  }
  @media screen and (max-width: 420px) {
    float: left;
    &:first-child {
      margin-left: 0.5em;
    }
    &:before {
      display:none;
    }
  }
`;
class NavItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { router } = this.props;
    const { index, to, children, ...props } = this.props;
    let isActive;

    if (router.isActive('/', true) && index) {
      isActive = true;
    } else {
      isActive = router.isActive(to);
    }
    const LinkComponent = index ? StyledLink : StyledIndexLink;
    return (
      <Li current={isActive}>
        <LinkComponent current={isActive} to={to} {...props}>{children}</LinkComponent>
      </Li>
    );
  }
}

NavItem.propTypes = {
  router: PropTypes.object,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  index: PropTypes.bool,
};

const RouterNavItem = withRouter(NavItem);

export default RouterNavItem;
