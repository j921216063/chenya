import React, { PropTypes } from 'react';
import styled from 'styled-components';

const TextBox = ({ className, children }) =>
  <span className={className}>{children}</span>;

TextBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const StyledTextBox = styled(TextBox) `
  background: ${({ background }) => (background || '#ddd')};
  color: ${({ color }) => (color || 'white')};
  width: ${({ width }) => (width || '200px')};
  height: ${({ height }) => (height || 'inherit')};
  padding: 10px;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
`;

export default StyledTextBox;
