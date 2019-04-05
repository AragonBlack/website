import React from "react";
import ReactDOM from "react-dom";
import SVG from "react-inlinesvg";
import "./styles/styles.less";
import "normalize.css";
import styled from "styled-components";
import ReactPageScroller from "react-page-scroller";
import YouTube from "react-youtube";
import PageCounter from "./components/PageCounter";
import Grained from "./components/grained";
import Screen from "./components/screen.js";
import Logo from "./components/logo";
import Wordmark from "./components/wordmark";
import Nav from "./components/nav";
import Splash from "./screens/splash";

import Skip from "./components/Skip";

// import grained from "grained";

import Two from "./screens/Two";
import Team from "./screens/team";

const opts = {
  width: "1024"
};

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Grained>
          <Main>
            <Nav>
              <ul>
                <li>proposal</li>
              </ul>
            </Nav>

            <Splash />
            <Two />
            <Team />
          </Main>
        </Grained>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const Main = styled.div`
  /* position: relative;
  height: 100vh;
  width: 100vw; */
`;

const Screens = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100vw - 300px);
  min-height: 100vh;
  padding: 0 150px 0 150px;
`;

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
