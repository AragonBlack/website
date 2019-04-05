import React from "react";
import styled from "styled-components";

export default class Grained extends React.Component {
  componentDidMount() {
    var options = {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.07,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1
    };
    // this.$el = $(this.el);
    // this.$el.somePlugin();
    grained("#grained", options);
  }

  render() {
    return <Wrapper id="grained">{this.props.children}</Wrapper>;
  }
}

const Wrapper = styled.div`
  * {
    position: relative;
  }
  background-color: #0d1212;
  background: repeating-linear-gradient(
    to right,
    #0d1212,
    #0d1212 15vw,
    #1f2424 15vw,
    #1f2424 calc(15vw + 1px)
  );
  min-height: 100vh;
  width: 100vw;
`;
