import React from 'react'
import styled from 'styled-components'

const items = ['About', 'Proposal', 'Values', 'Team']

export default props => {
  const { currentIndex, setScrollIndex } = props
  const renderContent = items.map((item, idx) => (
    <li key={item} className={currentIndex === idx ? 'active' : ''} onClick={() => setScrollIndex(idx)}>
      {item}
    </li>
  ))
  return (
    <Nav>
      <ul>
        {renderContent}
        <li>
          <a href="https://blog.aragon.black/" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </li>
      </ul>
    </Nav>
  )
}

const Nav = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 6rem;
    width: 100%;

    z-index: 1;

    ul {
      color: rgba(114, 114, 114, 0.5);
      font-family: 'Tungsten', sans-serif;
      font-size: 28px;
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: auto;
      padding: 0;
      justify-content: space-around;
      height: 100%;
      list-style-type: none;
    }
    li {
      transition: all 300ms ease 0s;
      text-align: center;
      text-decoration: none;

      &:hover,
      &.active {
        cursor: pointer;
        color: #ffffff;
        border-bottom: #00f0e0 solid 2px;
      }
    }
  }

  a {
    color: rgba(114, 114, 114, 0.5);
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }

  @media (min-width: 1170px) {
    top: 50%;
    left: 0;
    width: 150px;
    height: 70vh;
    transform: translateY(-50%);

    ul {
      flex-direction: column;
    }
    li {
      transform: rotate(-90deg);
    }
  }
`
