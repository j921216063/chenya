import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import H2 from 'components/H2';
import H1 from 'components/H1';
import TextBox from 'components/TextBox';
import Article from 'components/Article';
import FlexContainer from 'components/FlexContainer';
import TextBoxMargin from './TextBoxMargin';
import ImgTW from './ImgTW';
import ImgC1 from './ImgC1';
import ImgC2 from './ImgC2';
import ImgFamily from './ImgFamily';
import WrapImgFamily from './WrapImgFamily';
import TextFamily from './TextFamily';
import WrapImgTW from './WrapImgTW';
import messages from './messages';
import Video from './Video';
import Video2 from './Video2';
import Table from './Table';
import Td from './Td';
import TdHead from './TdHead';
import HighLightText from './HighLightText';
import twad1 from './tw-ad1.png';
import twad2 from './tw-ad2.png';
import compare1 from './compare1.png';
import compare2 from './compare2.png';
import familycase from './familycase.png';
import FlexContainerR from './FlexContainerR';
import Rectangle from './Rectangle';
import Triangle from './Triangle';
import CompareSection from './CompareSection';
import CompareContent from './CompareContent';
import FlexLeft from './FlexLeft';
import FlexRight from './FlexRight';

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Product Introduction"
          meta={[
            { name: 'description', content: 'Product Introduction' },
          ]}
        />
        <Section1>
          <Container>
            <Article>
              <header>
                <H1>
                  <FormattedMessage {...messages.header} />
                </H1>
              </header>
              <H2>
                <FormattedMessage {...messages.video1Header} />
              </H2>
              <Video />
              <H2>
                <FormattedMessage {...messages.compareHeader} />
              </H2>
              <CompareSection>
                <ImgC1 src={compare1} alt="" />
                <CompareContent>
                  <FlexContainer justify="space-between">
                    <TextBox width="35%" background="#444444"><FormattedMessage {...messages.tradWindFram} /></TextBox>
                    <TextBox width="35%" background="#444444"><FormattedMessage {...messages.newWindFarm} /></TextBox>
                  </FlexContainer>
                  <FlexContainerR wrap="wrap">
                    <FlexLeft>
                      <TextBoxMargin width="66%" background="#FFAA33"><FormattedMessage {...messages.lowCost} /></TextBoxMargin>
                    </FlexLeft>
                    <FlexRight>
                      <TextBoxMargin width="66%" background="#886600"><FormattedMessage {...messages.noNoice} /></TextBoxMargin>
                      <TextBoxMargin width="66%" background="#888800"><FormattedMessage {...messages.lowLoss} /></TextBoxMargin>
                      <TextBoxMargin width="66%" background="#EE7700"><FormattedMessage {...messages.highEff} /></TextBoxMargin>
                      <TextBoxMargin width="66%" background="#666666"><FormattedMessage {...messages.modular} /></TextBoxMargin>
                    </FlexRight>
                    <Rectangle width="100%" height="10px" />
                  </FlexContainerR>
                  <Triangle />
                </CompareContent>
                <ImgC2 src={compare2} alt="" />
              </CompareSection>
              <Table>
                <tbody>
                  <tr>
                    <Td odd><FormattedMessage {...messages.t1r1c1} /></Td>
                    <Td odd><FormattedMessage {...messages.t1r1c2} /></Td>
                  </tr>
                  <tr>
                    <Td><FormattedMessage {...messages.t1r2c1} /></Td>
                    <Td><FormattedMessage {...messages.t1r2c2} /></Td>
                  </tr>
                  <tr>
                    <Td odd><FormattedMessage {...messages.t1r3c1} /></Td>
                    <Td odd><FormattedMessage {...messages.t1r3c2} /></Td>
                  </tr>
                  <tr>
                    <Td><FormattedMessage {...messages.t1r4c1} /></Td>
                    <Td><FormattedMessage {...messages.t1r4c2} /></Td>
                  </tr>
                  <tr>
                    <Td odd><FormattedMessage {...messages.t1r5c1} /></Td>
                    <Td odd><FormattedMessage {...messages.t1r5c2} /></Td>
                  </tr>
                  <tr>
                    <Td><FormattedMessage {...messages.t1r6c1} /></Td>
                    <Td><FormattedMessage {...messages.t1r6c2} /></Td>
                  </tr>
                  <tr>
                    <Td odd><FormattedMessage {...messages.t1r7c1} /></Td>
                    <Td odd><FormattedMessage {...messages.t1r7c2} /></Td>
                  </tr>
                  <tr>
                    <Td><FormattedMessage {...messages.t1r8c1} /></Td>
                    <Td><FormattedMessage {...messages.t1r8c2} /></Td>
                  </tr>
                  <tr>
                    <Td odd><FormattedMessage {...messages.t1r9c1} /></Td>
                    <Td odd><FormattedMessage {...messages.t1r9c2} /></Td>
                  </tr>
                  <tr>
                    <Td><FormattedMessage {...messages.t1r10c1} /></Td>
                    <Td><FormattedMessage {...messages.t1r10c2} /></Td>
                  </tr>
                  <tr>
                    <Td odd><FormattedMessage {...messages.t1r11c1} /></Td>
                    <Td odd><FormattedMessage {...messages.t1r11c2} /></Td>
                  </tr>
                </tbody>
              </Table>
            </Article>
            <Article>
              <header>
                <H2>
                  <FormattedMessage {...messages.searchHeader} />
                </H2>
              </header>
              <Video2 />
            </Article>
            <Article>
              <header>
                <H2>
                  <FormattedMessage {...messages.taiwanAdvantage} />
                </H2>
              </header>
              <FlexContainer justify="space-evenly" wrap="wrap">
                <WrapImgTW>
                  <ImgTW src={twad1} alt="台灣平均風速" />
                </WrapImgTW>
                <WrapImgTW>
                  <ImgTW src={twad2} alt="台灣平均風速" />
                </WrapImgTW>
              </FlexContainer>
            </Article>
            <Article>
              <header>
                <H2>
                  <FormattedMessage {...messages.familyCaseHeader} />
                </H2>
              </header>
              <FlexContainer wrap="wrap" justify="center">
                <WrapImgFamily>
                  <ImgFamily src={familycase} alt="台灣平均風速" />
                </WrapImgFamily>
                <TextFamily> <FormattedMessage {...messages.familyCaset1} /></TextFamily>
                <TextFamily> <FormattedMessage {...messages.familyCaset2} /></TextFamily>
              </FlexContainer>
            </Article>
            <Article>
              <header>
                <H2>
                  <FormattedMessage {...messages.baseUsageHeader} />
                </H2>
              </header>
              <Table>
                <thead>
                  <tr>
                    <TdHead ><FormattedMessage {...messages.t2r1c1} /></TdHead>
                    <TdHead ><FormattedMessage {...messages.t2r1c2} /></TdHead>
                    <TdHead ><FormattedMessage {...messages.t2r1c3} /></TdHead>
                    <TdHead ><FormattedMessage {...messages.t2r1c4} /></TdHead>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TdHead odd><FormattedMessage {...messages.t2r2c1} /></TdHead>
                    <Td odd>900</Td>
                    <Td odd>8<FormattedMessage {...messages.hour} />*30<FormattedMessage {...messages.day} />=240</Td>
                    <Td odd>216</Td>
                  </tr>
                  <tr>
                    <TdHead><FormattedMessage {...messages.t2r3c1} /></TdHead>
                    <Td>130</Td>
                    <Td>24<FormattedMessage {...messages.hour} />*30<FormattedMessage {...messages.day} />=720</Td>
                    <Td>93.6</Td>
                  </tr>
                  <tr>
                    <TdHead odd><FormattedMessage {...messages.t2r4c1} /></TdHead>
                    <Td odd>140</Td>
                    <Td odd>2<FormattedMessage {...messages.hour} />*30<FormattedMessage {...messages.day} />=120</Td>
                    <Td odd>8.4</Td>
                  </tr>
                  <tr>
                    <TdHead><FormattedMessage {...messages.t2r5c1} /></TdHead>
                    <Td>420</Td>
                    <Td>1<FormattedMessage {...messages.hour} />*30<FormattedMessage {...messages.day} />=30</Td>
                    <Td>12.6</Td>
                  </tr>
                  <tr>
                    <TdHead odd><FormattedMessage {...messages.t2r6c1} /></TdHead>
                    <Td odd>370</Td>
                    <Td odd>2<FormattedMessage {...messages.hour} />*30<FormattedMessage {...messages.day} />=120</Td>
                    <Td odd>22.2</Td>
                  </tr>
                  <tr>
                    <TdHead><FormattedMessage {...messages.t2r7c1} /></TdHead>
                    <Td>15</Td>
                    <Td>1<FormattedMessage {...messages.hour} />*30<FormattedMessage {...messages.day} />=30</Td>
                    <Td>0.45</Td>
                  </tr>
                  <tr>
                    <TdHead odd><FormattedMessage {...messages.t2r8c1} /></TdHead>
                    <Td odd>25*6=150</Td>
                    <Td odd>5<FormattedMessage {...messages.hour} />*30<FormattedMessage {...messages.day} />=150</Td>
                    <Td odd>22.5</Td>
                  </tr>
                  <tr>
                    <TdHead><FormattedMessage {...messages.t2r9c1} /></TdHead>
                    <Td>17*6=102</Td>
                    <Td>5<FormattedMessage {...messages.hour} />*30<FormattedMessage {...messages.day} />=150</Td>
                    <Td>15.3</Td>
                  </tr>
                  <tr>
                    <TdHead odd></TdHead>
                    <Td odd></Td>
                    <Td odd></Td>
                    <Td odd><FormattedMessage {...messages.total} /><HighLightText> 391 </HighLightText><FormattedMessage {...messages.premoth} /></Td>
                  </tr>
                </tbody>
              </Table>
            </Article>
          </Container>
        </Section1 >
      </div >
    );
  }
}
