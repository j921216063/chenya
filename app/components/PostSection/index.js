import React from 'react';
import Wrapper from './Wrapper';
import Container from 'components/Container';
import Row from 'components/Row';
import RowItem from './RowItem';
import Box from './Box';
import A from './A';
import Img from './Img';
import Inner from './Inner';
import H3 from 'components/H3';
import pic01 from './pic01.jpg';
import pic02 from './pic02.jpg';
import pic03 from './pic03.jpg';
import pic04 from './pic04.jpg';

const PostSection = (props) => (
  <Wrapper>
    <Container>
      <Row>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic01} /></A>
            <Inner>
              <H3>The First Thing</H3>
              <p>Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.</p>
            </Inner>
          </Box>
        </RowItem>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic02} /></A>
            <Inner>
              <H3>The Second Thing</H3>
              <p>Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.</p>
            </Inner>
          </Box>
        </RowItem>
      </Row>
      <Row>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic03} /></A>
            <Inner>
              <H3>The Third Thing</H3>
              <p>Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.</p>
            </Inner>
          </Box>
        </RowItem>
        <RowItem>
          <Box>
            <A href=""><Img alt="" src={pic04} /></A>
            <Inner>
              <H3>The Fourth Thing</H3>
              <p>Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.</p>
            </Inner>
          </Box>
        </RowItem>
      </Row>
    </Container>
  </Wrapper>
);

export default PostSection;
