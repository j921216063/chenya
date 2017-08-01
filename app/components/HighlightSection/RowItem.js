import styled from 'styled-components';
import cx from 'classnames';
import H3 from 'components/H3';
import React from 'react';
import bg01 from './bg01.png';

const Wrapper = styled.section`
  width: 33.3333333333%;
  clear: none;
  margin-left: 0;
  @media screen and (max-width: 840px) {
    width: 100%;
  }
`;

const Box = styled.div`
  text-align: center;
  @media screen and (max-width: 840px) {
    text-align: left;
    position: relative;
    padding-left: 7em;
  }
  @media screen and (max-width: 480px) {
    padding-left: calc(4em + 30px);
  }
`;

const AweIcon = ({ className, icon }) => (<i className={cx(className, icon)}></i>);

AweIcon.propTypes = {
  className: React.PropTypes.string,
  icon: React.PropTypes.string.isRequired,
};

const StyledAweIcon = styled(AweIcon) `
  text-decoration: none;
  position: relative;
  text-decoration: none;

  &:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
    font-size: 36px;
  }

  text-align: center;
  cursor: default;
  background-color: #37c0fb;
  background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.15)), url(${bg01});
  background-image: -webkit-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.15)), url(${bg01});
  color: #fff;
  border-radius: 100%;
  display: inline-block;
  width: 5em;
  height: 5em;
  line-height: 5em;
  box-shadow: 0 0 0 7px white, 0 0 0 8px #e0e0e0;
  margin: 0 0 2em 0;

  @media screen and (max-width: 840px) {
    position: absolute;
    margin: 0;
    left: 0;
    top: 0.25em;
  }
  @media screen and (max-width: 480px) {
    width: 4em;
    height: 4em;
    line-height: 4em;
    box-shadow: 0 0 0 7px white, 0 0 0 8px #e0e0e0;
    &:before {
      font-size: 24px;
    }
  }
`;

const RowItem = (props) => (
  <Wrapper>
    <Box>
      <StyledAweIcon icon={props.icon} />
      <H3>{props.title}</H3>
      <p>{props.message}</p>
    </Box>
  </Wrapper>
);
RowItem.propTypes = {
  title: React.PropTypes.string,
  icon: React.PropTypes.string.isRequired,
  message: React.PropTypes.string,
};

export default RowItem;
