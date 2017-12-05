import React, { PropTypes } from 'react';
import styled from 'styled-components';


const FlexBox = ({ className, children }) =>
  <div className={className}>{children}</div>;

FlexBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const FlexContainer = styled(FlexBox) `
  flex-direction: ${({ direct }) => (direct || 'row')};
  flex-wrap: ${({ wrap }) => (wrap || 'nowrap')};
  justify-content: ${({ justify }) => (justify || 'flex-start')};
  display: flex;
`;

export default FlexContainer;
