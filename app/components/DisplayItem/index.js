import React from 'react';
import styled from 'styled-components';


const Wrapper = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

Wrapper.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

const StyledWrapper = styled(Wrapper) `
  width: 300px;
  height: 400px;
  flex-direction: column;
  display: flex;
`;

const Title = ({ title, className }) => (
  <div className={className}><span>{title}</span></div>
);

Title.propTypes = {
  title: React.PropTypes.string,
  className: React.PropTypes.string,
};

// 注意 Title 必須有 className 屬性
const StyledTitle = styled(Title) `
  background-color: ${(props) => (props.titlebg) ? props.titlebg : '#1D9CB1'};
  color: white;
  text-align: center;
  width: 100%;
  flex: 1.5;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border: 3px solid #1B9FE2;
  border-bottom-style: none;
  span {
    vertical-align: middle;
    font-size: 26px
  }
  &:before {
    display: inline-block;
    content: '';
    height: 100%;
    vertical-align: middle;
  }
`;

const StyledImage = styled.div`
  width: 100%;
  flex: 9;
  background: #eee;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 3px solid #1B9FE2;
  border-top-style: none;
`;


const DisplayItem = ({ className, title, image, titlebg }) => (
  <StyledWrapper className={className}>
    <StyledTitle title={title} titlebg={titlebg} />
    <StyledImage image={image} />
  </StyledWrapper>
);

DisplayItem.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  image: React.PropTypes.string,
  titlebg: React.PropTypes.string,
};

export default DisplayItem;
