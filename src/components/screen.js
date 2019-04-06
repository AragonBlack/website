import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import "../styles/styles.less";

import Grid from "styled-components-grid";
//
// export default props => (
//   <Wrapper halign="center" valign="center">
//     <Grid.Unit size={{ desktop: 1 / 2, mobile: 1 }}>
//       <Logo width="500px" />
//     </Grid.Unit>
//     <Grid.Unit size={{ desktop: 1 / 2, mobile: 1 }}>
//       <Wordmark width="500px" />
//     </Grid.Unit>
//   </Wrapper>
// );
//
// const Wrapper = styled(Grid)`
//   min-height: 100vh;
//   w

export default props => {
  const title = props.title.split(" ").map(word => (
    <span>
      {word}
      <br />
    </span>
  ));

  return (
    <Screen halign="justify-center" valign="center">
      <Grid.Unit size={{ desktop: 1 / 2, mobile: 1 / 2 }}>
        <Body>{props.children}</Body>
      </Grid.Unit>

      <Header>
        <Grid.Unit size={{ desktop: 1 / 2, mobile: 1 / 2 }}>
          <h2>{title}</h2>
        </Grid.Unit>
      </Header>
    </Screen>
  );
};

const White = styled.span`
  color: #eff4f4;
  opacity: 0.4;
`;

const Screen = styled(Grid)`
  background-color: none;
  color: #ffffff;
  opacity: 0.7;

  font-family: "Inconsolata", monospace;
  font-size: 1.1em;
  /* letter-spacing: 0.08em; */

  display: flex;
  justify-content: space-around;

  padding: auto 150px;
  min-height: 100vh;
  width: 100%;
`;

const Header = styled.div`



  h2 {
    font-family: "Tungsten", sans-serif;
    font-size: 7em;
    text-transform: uppercase;
    color: rgba(47, 52, 52, 0.4);
    /* text-decoration: underline solid #00f0e0; */
    /* opacity: 0.4; */
    line-height: 1;
    /* margin: 0;
    padding: 0; */
    text-shadow: 0 0 2px @white;
    /* position: relative */

    /* width: fit-content; */

    /* &:before {
      background-color: #00f0e0;
      content:"";
      display: block
      position: absolute;
      opacity: 1;
      top: 50%;
      left: -40px;
      transform: translateY(-50%);
      width: 4px;
      height: 50%;
    } */

`;

const Body = styled.div`
  font-family: "Nitti", serif;
  font-size: 1.05em;

  color: #ffffff;

  font-weight: lighter;

  p {
    /* border-left: 2px solid #00f0e0; */
    line-height: 1.4em;
    font-weight: light;
    padding: 5px 5px 5px 10px;
    background-color: rgba(13, 18, 18, 0.5);
    /* opacity: 0.6; */
    width: fit-content;
  }

  a {
    position: relative;
    color: #ffffff;
    text-decoration: none;
    border-bottom: 2px solid #00f0e0;
    z-index: 10;

    /* &:after {
      background-color: #00f0e0;
      display: block;
      content: " ";
      height:5px;
      width: 100%;
      position: absolute;
      bottom: -3px;
      left: 0;
      z-index: 5;
    } */
  }
`;
