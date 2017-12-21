import React from 'react';
import styled from 'styled-components';


const Wrapper = ({ className, children }) => (
  <div className={className}>
    <div>
      {children}
    </div>
  </div>
);

Wrapper.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

const StyledWrapper = styled(Wrapper) `
  width: 300px;
  height:0;
  padding-top: 44%;
  position: relative;
  > div{
    position: absolute;
    left: 0;
    right:0;  
    top: 0;
    bottom: 0;
    height: 85%;
    width: 85%;
    margin: 0 auto;
    flex-direction: column;
    display: flex;
  }

  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    padding-top: 133%;
    height: 8%;
     width: 80%;
  }

`;

const Title = ({ title, subtitle, className }) => (
  <div className={className}>
    <div>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  </div>
);

Title.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
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
  > div {
    display: inline-block;
    vertical-align: middle;
    .title {
      font-size: 26px;
    }
    .subtitle {
      font-size: 16px;
    }
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
  flex: 7;
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


const DisplayItem = ({ className, title, subtitle, image, titlebg }) => (
  <StyledWrapper className={className}>
    <StyledTitle title={title} subtitle={subtitle} titlebg={titlebg} />
    <StyledImage image={image} />
  </StyledWrapper>
);

DisplayItem.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  image: React.PropTypes.string,
  titlebg: React.PropTypes.string,
};

export default DisplayItem;
