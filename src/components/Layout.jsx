import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import nitti from '../assets/fonts/nitti.otf'
import tungsten from '../assets/fonts/tungsten_medium.otf'
import metaImage from '../assets/images/meta-image.jpg'
import Grained from './Grained'

if (typeof window !== `undefined`) {
  require('../assets/js/grained')
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Tungsten';
    src: url('${tungsten}');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nitti';
    src: url('${nitti}');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1.5;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html,
  button,
  input,
  textarea {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Nitti, -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, Cantarell, Roboto, Helvetica, Arial, Noto Sans,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Helmet>
      <title>Aragon Black Team</title>
      <meta name="title" content="Aragon Black Team" />
      <meta
        name="description"
        content="Aragon Black is proud member of the Aragon Flock, taking part in its fight towards freedom and decentralization."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.aragon.black/" />
      <meta property="og:title" content="Aragon Black Team" />
      <meta
        property="og:description"
        content="Aragon Black is proud member of the Aragon Flock, taking part in its fight towards freedom and decentralization."
      />
      <meta property="og:image" content={`https://www.aragon.black${metaImage}`} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.aragon.black/" />
      <meta property="twitter:title" content="Aragon Black Team" />
      <meta
        property="twitter:description"
        content="Aragon Black is proud member of the Aragon Flock, taking part in its fight towards freedom and decentralization."
      />
      <meta property="twitter:image" content={`https://www.aragon.black${metaImage}`} />

      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
      <script crossOrigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145335364-2" />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-145335364-2');
        `}
      </script>
    </Helmet>
    <Grained>{children}</Grained>
  </>
)

export default Layout
