import React from "react";
import styled from "styled-components";

export default props => (
  <Nav>
    <ul>
      <li>about</li>
      <li>proposal</li>
      <li class="active">values</li>
      <li>team</li>
    </ul>
  </Nav>
);

const Nav = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  /* background-color: #0f1414; */
  transform: translateY(-50%);
  height: 70vh;
  width: 150px;

  ul {
    color: #383e3e;
    font-family: "Tungsten", sans-serif;
    font-size: 1.3em;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 0;
    justify-content: space-around;
    height: 100%;
    list-style-type: none;
  }
  li {
    transform: rotate(-90deg);
    text-align: center;
    text-decoration: none;

    &.active {
      color: #ffffff;

      &:after {
        background-color: #00f0e0;
        content: "";
        display: block;
        height: 2px;
        width: 100%;
      }
    }
  }
`;
