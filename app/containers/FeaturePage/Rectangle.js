import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Rect = ({ className }) =>
  <div className={className}></div>;

Rect.propTypes = {
  className: PropTypes.string,
};

const StyledRect = styled(Rect) `
  background: ${({ background }) => (background || '#ddd')};
  width: ${({ width }) => (width || '200px')};
  height: ${({ height }) => (height || '200px')};
`;

export default StyledRect;
