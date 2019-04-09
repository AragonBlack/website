import React from 'react'
import styled from 'styled-components'

export default class Grained extends React.Component {
  componentDidMount() {
    const options = {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.07,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1,
    }
    window.grained('#grained', options)
  }

  render() {
    const { children } = this.props
    return <Wrapper id="grained">{children}</Wrapper>
  }
}

const Wrapper = styled.div`
  background-image: linear-gradient(
    135deg,
    #1f1f1f 49.66%,
    #2e2e2e 49.66%,
    #2e2e2e 50%,
    #1f1f1f 50%,
    #1f1f1f 99.66%,
    #2e2e2e 99.66%,
    #2e2e2e 100%
  );
  background-size: 205.06px 205.06px;
  min-height: 100vh;
  width: 100vw;
  * {
    position: relative;
  }
`

// background-color: #0d1212;
// background: repeating-linear-gradient(to right, #0d1212, #0d1212 14.2vw, #1f2424 14.2vw, #1f2424 calc(14.2vw + 1px));
