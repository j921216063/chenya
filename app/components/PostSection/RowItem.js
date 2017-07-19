import styled from 'styled-components';
// import H3 from 'components/H3';
// import React from 'react';
// import Img from 'components/Img';


const RowItem = styled.section`
  width: 50%;
  clear: none;
  margin-left: 0;
  @media screen and (max-width: 840px) {
    width: 100%;
  }
`;







// const RowItem = (props) => (
//   <Wrapper>
//     <Box>
//       <ImageA href={props.href}><Img alt={props.alt} src={props.src} /></ImageA>
//       <Inner>
//         <H3>{props.title}</H3>
//         <p>{props.message}</p>
//       </Inner>
//     </Box>
//   </Wrapper>
// );

// RowItem.propTypes = {
//   href: React.PropTypes.string,
//   alt: React.PropTypes.string,
//   src: React.PropTypes.string,isRequired,
//   title: React.PropTypes.string,
//   message: React.PropTypes.string,
// };
// RowItem.defaultProps = {
//   href: '',
//   alt: '',
// }

export default RowItem;
