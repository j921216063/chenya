import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import H2 from 'components/H2';
import messages from './messages';
import Video from './Video';
import Table from './Table';
import Td from './Td';

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
          title="About Us"
          meta={[
            { name: 'description', content: 'Feature page ' },
          ]}
        />
        <Section1>
          <Container>
            <article>
              <header>
                <H2>
                  <FormattedMessage {...messages.header} />
                </H2>
              </header>
              <Video />
              <h3>
                <FormattedMessage {...messages.compareHeader} />
              </h3>
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
            </article>
          </Container>
        </Section1>
      </div>
    );
  }
}
