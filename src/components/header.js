import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../images/logo1.png"
import Menu from "./Menu"

const HeaderContainer = styled.header`
  margin-bottom: 0;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.75rem 1.0875rem 0;
`

const LogoWrapper = styled.div`
  max-width: 400px;

  h1 {
    margin: 0;

    strong {
      position: absolute;
      top: -999em;
      left: -999em;
      width: 0;
      height: 0;
      font-size: 0;
      line-height: 0;
      text-indent: -999em;
      overflow: hidden;
    }
  }
`

const MiniCartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
  margin-bottom: 0.5rem;

  p {
    margin: 0;

    a {
      text-decoration: none;
    }
  }
`

const MiniCart = styled.p`
  right: 23px;
  position: absolute;
  padding: 4px;
  font-size: 0.9rem;
  background-color: #000;
  border-radius: 2px;
  border: 3px solid #ffd100;
  z-index: 100;

  @media (max-width: 700px) {
    font-size: 80%;
    padding: 0;
  }

  @media (max-width: 381px) {
    font-size: 70%;
  }
`

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <LogoWrapper>
        <h1>
          <strong>Up Safety Solutions</strong>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            <img
              style={{ width: `100%` }}
              src={Logo}
              alt="Up Safety Solutions Logo"
            />
          </Link>
        </h1>
      </LogoWrapper>
    </LogoContainer>
    <MiniCartWrapper>
      <MiniCart data-fc-id="minicart minicart-empty">
        <a
          style={{ padding: `10px` }}
          rel="preconnect"
          href="https://upsafetysolutions.foxycart.com/cart?cart=view"
        >
          <span style={{ color: `#fff`, paddingRight: `8px` }}>CART</span>
          <span style={{ color: `#fff` }} data-fc-id="minicart-quantity">
            0
          </span>
        </a>
      </MiniCart>
    </MiniCartWrapper>
    <Menu />
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
