import styled from "styled-components"
import Img from "gatsby-image"

export const StyledImg = styled(Img)`
  /* height: 800px; */
  width: 100%;
`

export const WbnSlide = styled.div`
  position: absolute;
  /* height: 800px; */
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease;
  background-size: cover !important;
  background-position: center !important;

  .wbn-overlay-text {
    position: absolute;
    top: 0;
    z-index: 100;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 0;
    width: 100%;
    height: 100%;
    color: white;
    opacity: 0;
    transition: all 2.2s;
    transform: translateY(0%);
    transition: all 400ms cubic-bezier(0.645, 0.045, 0.355, 1); /* easeInOutExpo */

    .wbn-header {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 2.1rem;
      transition: all 1s;
      text-shadow: 5px 5px 10px #000000;
      transform: scale(0.7);
      margin: 20px 0;
      padding: 0 30px;

      @media (min-width: 576px) {
        font-size: 2.1rem;
        line-height: 2.6rem;
        padding: 0 50px;
      }

      @media (min-width: 768px) {
        font-size: 3rem;
        line-height: 3.65rem;
      }

      @media (min-width: 992px) {
        font-size: 4rem;
        line-height: 4.8rem;
      }

      /* @media (min-width: 1200px) {
        font-size: 5rem;
        line-height: 6rem;
      } */
    }

    .wbn-text {
      text-align: center;
      font-size: 0.9rem;
      line-height: 20px;
      font-weight: 800;
      margin: 0 0 40px 0;
      color: white;
      max-width: 30%;
      transition: all 1s;
      opacity: 0;
      text-shadow: 2px 2px 0px #000000;
      transform: translateY(50%);

      @media (min-width: 576px) {
        line-height: 25px;
      }

      @media (min-width: 768px) {
        font-size: 1rem;
      }

      @media (min-width: 992px) {
        font-size: 1.1rem;
        line-height: 30px;
      }

      @media (min-width: 1200px) {
        font-size: 1.3rem;
      }
    }

    button {
      border: 0;
      background: #ffd100;
      /* opacity: 0.9; */
      padding: 10px 20px;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      font-weight: 800;
      outline: none;
      -webkit-box-shadow: 2px 2px 0px 2px rgba(230, 188, 0, 1);
      -moz-box-shadow: 2px 2px 0px 2px rgba(230, 188, 0, 1);
      box-shadow: 2px 2px 0px 2px rgba(230, 188, 0, 1);

      :hover {
        transform: translateY(5%);
      }

      &:active {
        background: #e6bc00;
        border: 3px solid #e6bc00;
        color: #fff;
        top: 2.5px;
        left: 2.5px;
        box-shadow: 0px 0px 0px 0px rgba(230, 188, 0, 1);
      }

      @media (min-width: 1200px) {
        font-size: 1.3rem;
      }
    }
  }
`

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 215px;
  margin: 0 0 60px 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;

  .active {
    z-index: 10;
    opacity: 1;
  }

  .active div {
    opacity: 1;
  }

  .active div .wbn-text {
    opacity: 1;
    transform: translateY(0%);
  }

  .active div .wbn-header {
    opacity: 1;
    transform: scale(1);
  }

  @media (min-width: 322px) {
    height: 250px;
  }

  @media (min-width: 768px) {
    height: 500px;
  }

  @media (min-width: 992px) {
    height: 650px;
  }

  @media (min-width: 1200px) {
    height: 700px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  top: 0;
  height: 100%;
  padding: 0;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  font-size: 50px;
  font-weight: bolder;
  color: #ff5100;
  /* opacity: 0.7; */
  border: 0;
  outline: none;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  transition: all 0.2s;

  :hover {
    transform: scale(1.1);
    opacity: 0.8;
    cursor: pointer;
  }
`
