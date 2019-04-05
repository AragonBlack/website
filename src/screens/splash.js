import React from "react";
import styled from "styled-components";
import Logo from "../components/logo";
import Wordmark from "../components/wordmark";

import Grid from "styled-components-grid";

export default props => (
  <Wrapper halign="center" valign="center">
    <Grid.Unit size={{ desktop: 1 / 2, mobile: 1 }}>
      <Logo width="500px" />
    </Grid.Unit>
    <Grid.Unit size={{ desktop: 1 / 2, mobile: 1 }}>
      <Wordmark width="500px" />
    </Grid.Unit>
  </Wrapper>
);

const Wrapper = styled(Grid)`
  min-height: 100vh;
  width: 100%;
`;
