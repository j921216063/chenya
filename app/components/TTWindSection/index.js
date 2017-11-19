import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import H2 from 'components/H2';
import Img from 'components/Img';
import Icon from './10kw.png';
import messages from './messages';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageBox = styled.div`
  padding-right: 30px;
  /* background:red; */
  flex:1;
`;
const RightContainer = styled.div`
  /* background: blue; */
  flex: 2;
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
`;

const Info = styled.div`
  font-weight: bolder;
  padding-bottom: 30px;
`;

const ItemBox = styled.div`
  &:nth-child(even) {
      padding-left: 40%;
  }
`;

const TTWindSection = () => (
  <Section1>
    <Container>
      <header>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
      </header>
      <Wrap>
        <ImageBox>
          <Img src={Icon} alt="" />
        </ImageBox>
        <RightContainer>
          <ItemBox>
            <StyledTitle text="模組化設計" />
            <Info>堆疊或組合式設計更有效率的應用</Info>
          </ItemBox>
          <ItemBox>
            <StyledTitle text="特殊葉片設計" />
            <Info>風力撞擊時噪音吸收達靜音設計</Info>
          </ItemBox>
          <ItemBox>
            <StyledTitle text="鋼骨結構" />
            <Info>抗震防亂流結構降低天然災害耗損</Info>
          </ItemBox>
          <ItemBox>
            <StyledTitle text="維護、維修" />
            <Info>鋼骨結構、360度進風，避免風災損耗<br />效能不減弱、減少維護資源耗損</Info>
          </ItemBox>
        </RightContainer>
      </Wrap>
      {/* <Img src={temp}/> */}
    </Container>
  </Section1>
);

export default TTWindSection;
