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
  background-color: #0d1212;
  background-image: linear-gradient(
    135deg,
    #0d1212 49.69%,
    #1f2424 49.69%,
    #1f2424 50%,
    #0d1212 50%,
    #0d1212 99.69%,
    #1f2424 99.69%,
    #1f2424 100%
  );
  background-size: 227.69px 227.69px;
  min-height: 100vh;
  width: 100vw;
  * {
    position: relative;
  }
`

// background-color: #0d1212;
// background: repeating-linear-gradient(to right, #0d1212, #0d1212 14.2vw, #1f2424 14.2vw, #1f2424 calc(14.2vw + 1px));
