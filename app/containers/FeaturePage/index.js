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
                <ImgC1 src={compare1} />
                <CompareContent>
                  <FlexContainer justify="space-between">
                    <TextBox width="35%" background="#444444">傳統式風機</TextBox>
                    <TextBox width="35%" background="#444444">渦輪式風機</TextBox>
                  </FlexContainer>
                  <FlexContainerR wrap="wrap">
                    <FlexLeft>
                      <TextBoxMargin width="66%" background="#FFAA33">成本低</TextBoxMargin>
                    </FlexLeft>
                    <FlexRight>
                      <TextBoxMargin width="66%" background="#886600">無噪音</TextBoxMargin>
                      <TextBoxMargin width="66%" background="#888800">低損耗</TextBoxMargin>
                      <TextBoxMargin width="66%" background="#EE7700">高效能</TextBoxMargin>
                      <TextBoxMargin width="66%" background="#666666">模組化</TextBoxMargin>
                    </FlexRight>
                    <Rectangle width="100%" height="10px" />
                  </FlexContainerR>
                  <Triangle />
                </CompareContent>
                <ImgC2 src={compare2} />
              </CompareSection>
              <Table>
                <tbody>
                  <tr>
                    <Td odd>啟動風速</Td>
                    <Td odd>啟動風速1m/s；發電風速2m/s。</Td>
                  </tr>
                  <tr>
                    <Td>噪音</Td>
                    <Td>運轉極靜音，約35分貝以內。</Td>
                  </tr>
                  <tr>
                    <Td odd>結構</Td>
                    <Td odd>全鋼骨建構可抗強烈颱風，受天災引響度小，可堆疊架設單位面積效率高，機體成本低，製造可模組化放大規格。</Td>
                  </tr>
                  <tr>
                    <Td>生產製造</Td>
                    <Td>模組化生產可降低製造成本。</Td>
                  </tr>
                  <tr>
                    <Td odd>現場施工</Td>
                    <Td odd>不需特殊高空重吊機具，安裝時受天候影響較小。</Td>
                  </tr>
                  <tr>
                    <Td>維修</Td>
                    <Td>每部可獨立維修保養 ，不必全部停機，營運效率高，維護可降低工程風險。</Td>
                  </tr>
                  <tr>
                    <Td odd>效率</Td>
                    <Td odd>運轉效率比傳統式風力機提高約30%-40%。</Td>
                  </tr>
                  <tr>
                    <Td>使用面積</Td>
                    <Td>風塔間效率互相增加可採陣列式，舊電廠或停用燃煤電廠，只要風量符合要求，可轉為此型風力電廠。</Td>
                  </tr>
                  <tr>
                    <Td odd>風機佈置</Td>
                    <Td odd>風機間隔為直徑的一半，後排風機可部置於二機之間，造成一片風牆，完全吸納風量。</Td>
                  </tr>
                  <tr>
                    <Td>使用風力</Td>
                    <Td>可調式閘門、可集風、可抗超強風，對風量可大部分使用。依風速不同自動增壓、減壓、關閉，提高功率及安全性。依風向不同自動尋風工作，增加效能。</Td>
                  </tr>
                  <tr>
                    <Td odd>發電功率</Td>
                    <Td odd>渦輪機發電功率每平方公尺約500瓦，Cp值約60%。</Td>
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
                <TextFamily>每月發電量6000度</TextFamily>
                <TextFamily>每家庭平均用電391度/月</TextFamily>
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
                    <TdHead >電器名稱</TdHead>
                    <TdHead >消耗電力(W)</TdHead>
                    <TdHead >每月使用時間(小時)</TdHead>
                    <TdHead >每月耗電量(度)</TdHead>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TdHead odd>冷氣機(1噸)</TdHead>
                    <Td odd>900</Td>
                    <Td odd>8小時*30天=240</Td>
                    <Td odd>216</Td>
                  </tr>
                  <tr>
                    <TdHead>冰箱(320公升)</TdHead>
                    <Td>130</Td>
                    <Td>24小時*30天=720</Td>
                    <Td>93.6</Td>
                  </tr>
                  <tr>
                    <TdHead odd>電視機</TdHead>
                    <Td odd>140</Td>
                    <Td odd>2小時*30天=120</Td>
                    <Td odd>8.4</Td>
                  </tr>
                  <tr>
                    <TdHead>洗衣機</TdHead>
                    <Td>420</Td>
                    <Td>1小時*30天=30</Td>
                    <Td>12.6</Td>
                  </tr>
                  <tr>
                    <TdHead odd>電腦</TdHead>
                    <Td odd>370</Td>
                    <Td odd>2小時*30天=120</Td>
                    <Td odd>22.2</Td>
                  </tr>
                  <tr>
                    <TdHead>手機充電</TdHead>
                    <Td>15</Td>
                    <Td>1小時*30天=30</Td>
                    <Td>0.45</Td>
                  </tr>
                  <tr>
                    <TdHead odd>日光燈*6</TdHead>
                    <Td odd>25*6=150</Td>
                    <Td odd>5小時*30天=150</Td>
                    <Td odd>22.5</Td>
                  </tr>
                  <tr>
                    <TdHead>省電燈泡*6</TdHead>
                    <Td>17*6=102</Td>
                    <Td>5小時*30天=150</Td>
                    <Td>15.3</Td>
                  </tr>
                  <tr>
                    <TdHead odd></TdHead>
                    <Td odd></Td>
                    <Td odd></Td>
                    <Td odd>每月耗電量總計<HighLightText> 391 </HighLightText>度/月</Td>
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
