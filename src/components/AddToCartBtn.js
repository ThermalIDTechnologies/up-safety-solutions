import React from "react"
import styled from "styled-components"

const Btn = styled.button`
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
  padding: 10px 25px;
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  -webkit-transition: all ease-in-out 0.5s;
  -moz-transition: all ease-in-out 0.4s;
  transition: all ease-in-out 0.4s;
  background: #ffd100;
  border: 3px solid #ffd100;
  color: #000;
  border-radius: 3px;
  -webkit-box-shadow: 2px 2px 0px 2px rgba(230, 188, 0, 1);
  -moz-box-shadow: 2px 2px 0px 2px rgba(230, 188, 0, 1);
  box-shadow: 2px 2px 0px 2px rgba(230, 188, 0, 1);
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
    background: #e6bc00;
    border: 3px solid #e6bc00;
    color: #fff;
    top: 2px;
    left: 2px;
    box-shadow: 0px 0px 0px 0px rgba(230, 188, 0, 1);
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

  @media (max-width: 568px) {
    padding: 10px 10px;
    font-size: 0.9em;
  }

  @media (max-width: 320px) {
    padding: 10px 5px;
    font-size: 0.8em;
  }
`

export default function AddToCartBtn() {
  return <Btn>ADD TO CART</Btn>
}
