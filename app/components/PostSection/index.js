import React from 'react';
import Section1 from 'components/Section1';
import Container from 'components/Container';
import Row from 'components/Row';
import H3 from 'components/H3';
import RowItem from './RowItem';
import Box from './Box';
import A from './A';
import Img from './Img';
import Inner from './Inner';
import pic01 from './pic01.jpg';
import pic02 from './pic02.jpg';
import pic03 from './pic03.jpg';
import pic04 from './pic04.jpg';

const PostSection = () => (
  <Section1>
    <Container>
      <Row>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic01} /></A>
            <Inner>
              <H3>環境影響</H3>
              <p>離岸型風電遠離陸地，居民不受噪音及光影問題的影響，並減少陸上土地的開發。</p>
            </Inner>
          </Box>
        </RowItem>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic02} /></A>
            <Inner>
              <H3>發電效率</H3>
              <p>海上的風大又穩，靜風期少，不僅可攫取的風能及產生的發電效率增加</p>
            </Inner>
          </Box>
        </RowItem>
      </Row>
      <Row>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic03} /></A>
            <Inner>
              <H3>帶動人潮</H3>
              <p>離岸風力發電的建置，可使當地別具地方特色，帶動觀光人潮，提升就業機會。</p>
            </Inner>
          </Box>
        </RowItem>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic04} /></A>
            <Inner>
              <H3>環保效益</H3>
              <p>風力資源是源源不絕且無污染的綠色能源，具有極大環保效益，可減少對化石燃料的依賴。</p>
            </Inner>
          </Box>
        </RowItem>
      </Row>
    </Container>
  </Section1>
);

export default PostSection;
