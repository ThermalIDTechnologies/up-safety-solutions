import React from "react"
import styled from "styled-components"

const Btn = styled.button`
  font-family: inherit;
  font-size: 0.9rem;
  color: inherit;
  background: none;
  cursor: pointer;
  padding: 2px 3px 0 3px;
  display: inline-block;
  margin: 0 0 0 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  background: #ff5100;
  border: 3px solid #ff5100;
  color: #000;
  border-radius: 3px;
  -webkit-box-shadow: 2px 2px 0px 2px rgba(230, 73, 0, 1);
  -moz-box-shadow: 2px 2px 0px 2px rgba(230, 73, 0, 1);
  box-shadow: 2px 2px 0px 2px rgba(230, 73, 0, 1);
  -webkit-transition: all ease-in-out 0.3s;
  -moz-transition: all ease-in-out 0.3s;
  transition: all ease-in-out 0.3s;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
  }

  &:hover {
    color: #fff;
  }

  &:active {
    background: #e64900;
    border: 3px solid #e64900;
    color: #fff;
    top: 2px;
    left: 2px;
    box-shadow: 0px 0px 0px 0px rgba(230, 73, 0, 1);
  }

  &:before {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    line-height: 3;
    font-size: 140%;
    width: 60px;
  }
`

export default function NLBtn() {
  return <Btn>SUBMIT</Btn>
}
