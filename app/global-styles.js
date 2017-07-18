import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
/* Reset */

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    -webkit-text-size-adjust: none;
  }

/* Box Model */

  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

/*base */
  body {
    background: #f7f7f7;
  }

  body.is-loading * {
      transition: none !important;
      animation: none !important;
  }

  body, input, select, textarea {
    color: #474747;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16pt;
    font-weight: 300;
    line-height: 1.65em;
  }

  @media screen and (max-width: 1680px) {

    /* Basic */

      body, input, select, textarea {
        font-size: 14pt;
        line-height: 1.5em;
  }

  @media screen and (max-width: 1280px) {

    /* Basic */

      body, input, select, textarea {
        font-size: 13pt;
        line-height: 1.5em;
  }

  @media screen and (max-width: 980px) {

    /* Basic */

      body, input, select, textarea {
        font-size: 12pt;
        line-height: 1.5em;
      }

  }

  @media screen and (max-width: 840px) {

    /* Basic */

      html, body {
        overflow-x: hidden;
      }

      body, input, select, textarea {
        font-size: 13pt;
      }

      h1, h2, h3, h4, h5, h6 {
        margin-bottom: 0.5em;
      }

      header p {
        margin-top: -0.75em;
      }

      @media screen and (max-width: 736px) {

    /* Basic */

      body, input, select, textarea {
        font-size: 11pt;
        line-height: 1.35em;
      }

      h2 {
        font-size: 1.25em;
        letter-spacing: 0;
        line-height: 1.35em;
      }

      h3 {
        font-size: 1em;
        letter-spacing: 0;
        line-height: 1.35em;
      }
  a {
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
    color: #37c0fb;
    text-decoration: none;
    border-bottom: dotted 1px;
  }

    a:hover {
      color: #37c0fb;
      border-bottom-color: transparent;
    }

  strong, b {
    font-weight: 600;
  }

  em, i {
    font-style: italic;
  }

  p, ul, ol, dl, table, blockquote {
    margin: 0 0 2em 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: inherit;
    font-weight: 600;
    line-height: 1.75em;
    margin-bottom: 1em;
  }

    h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
      color: inherit;
      text-decoration: none;
    }

    h1 em, h2 em, h3 em, h4 em, h5 em, h6 em {
      font-style: normal;
      font-weight: 300;
    }

  h2 {
    font-size: 1.75em;
    letter-spacing: -0.025em;
  }

  h3 {
    font-size: 1.2em;
    letter-spacing: -0.025em;
  }

  sub {
    font-size: 0.8em;
    position: relative;
    top: 0.5em;
  }

  sup {
    font-size: 0.8em;
    position: relative;
    top: -0.5em;
  }

  hr {
    border-top: solid 1px #e0e0e0;
    border: 0;
    margin-bottom: 1.5em;
  }

  blockquote {
    border-left: solid 0.5em #e0e0e0;
    font-style: italic;
    padding: 1em 0 1em 2em;
  }

  section.special, article.special {
    text-align: center;
  }

  header p {
    color: #999;
    font-size: 1.25em;
    position: relative;
    margin-top: -1.25em;
    margin-bottom: 2.25em;
  }

  header.major {
    text-align: center;
    margin: 0 0 2em 0;
  }

    header.major h2 {
      font-size: 2.25em;
    }

    header.major p {
      position: relative;
      border-top: solid 1px #e0e0e0;
      padding: 1em 0 0 0;
      margin: 0;
      top: -1em;
      font-size: 1.5em;
      letter-spacing: -0.025em;
    }

  footer {
    margin: 0 0 3em 0;
  }

  footer > :last-child {
      margin-bottom: 0;
  }

  footer.major {
    padding-top: 3em;
    }
`;
