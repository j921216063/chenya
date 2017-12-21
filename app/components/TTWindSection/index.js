import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import H1 from 'components/H1';
import Img from 'components/Img';
import Icon from './10kw.png';
import messages from './messages';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const ImageBox = styled.div`
  width:50%;
  flex:1;
  img {
    width: 80%;
  }
  /* Normal */
  @media screen and (max-width: 1280px) {
    img {
      width: 90%;
    }
  }
  /* Mobile */
  @media screen and (max-width: 736px) {
    img {
      width: 90%;
    }
  }
  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    flex:1 100%;
    text-align: center;
    img {
      width: 90%;
    }
  }
`;
const RightContainer = styled.div`
  /* background: blue; */
  width:50%;
  flex: 1;
    /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    flex: 1 100%;
  }
`;

const Title = ({ className, text }) => (
  <div className={className}>
    <span>{text}</span>
  </div>
);

Title.propTypes = {
  className: React.PropTypes.string,
  text: React.PropTypes.string,
};

const StyledTitle = styled(Title) `
  margin-bottom: 30px;
  span {
    box-sizing: border-box;
    min-width: 300px;
    width: 400px;
    background-color: #32A2AF;
    padding: 6px;
    display: inline-block;
    color: white;
    font-weight: bolder;
    font-size: 22px;
    border: 3px solid #1B9FE2;
    border-radius: 10px;
  }
  /* Normal */
  @media screen and (max-width: 1000px) {
    span {
      min-width: 300px;
      width: 300px;
    }
  }
  /* Mobile */
  @media screen and (max-width: 736px) {
    span {
      min-width: 300px;
      width: 100%;
    }
  }
  /* Mobile (Portrait) */
  @media screen and (max-width: 480px) {
    /* span {
      min-width: 300px;
      width: 300px;
    } */
  }
`;

const Info = styled.div`
  font-weight: bolder;
  padding-bottom: 30px;
`;

const ItemBox = styled.div`
  &:nth-child(even) {
      padding-left: 40%;
  }
  /* Normal */
  @media screen and (max-width: 1280px) {
    padding-left: 30px;
    &:nth-child(even) {
      padding-left: 30px;
    }
  }
  /* Mobile */
  @media screen and (max-width: 736px) {
    padding-left: 0;
    &:nth-child(even) {
      padding-left: 0;
    }
  }
`;

const TTWindSection = () => (
  <Section1>
    <Container>
      <header>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
      </header>
      <Wrap>
        <ImageBox>
          <Img src={Icon} alt="" />
        </ImageBox>
        <RightContainer>
          <ItemBox>
            <FormattedMessage {...messages.title1} >
              {(message) => (<StyledTitle text={message} />)}
            </FormattedMessage>
            <Info>
              <FormattedMessage {...messages.desc1} />
            </Info>
          </ItemBox>
          <ItemBox>
            <FormattedMessage {...messages.title2} >
              {(message) => (<StyledTitle text={message} />)}
            </FormattedMessage>
            <Info>
              <FormattedMessage {...messages.desc2} />
            </Info>
          </ItemBox>
          <ItemBox>
            <FormattedMessage {...messages.title3} >
              {(message) => (<StyledTitle text={message} />)}
            </FormattedMessage>
            <Info>
              <FormattedMessage {...messages.desc3} />
            </Info>
          </ItemBox>
          <ItemBox>
            <FormattedMessage {...messages.title4} >
              {(message) => (<StyledTitle text={message} />)}
            </FormattedMessage>
            <Info>
              <FormattedMessage {...messages.desc4} values={{ br: <br /> }} />
            </Info>
          </ItemBox>
        </RightContainer>
      </Wrap>
      {/* <Img src={temp}/> */}
    </Container>
  </Section1>
);

export default TTWindSection;
