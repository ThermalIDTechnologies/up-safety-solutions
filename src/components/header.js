import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../images/logo1.png"
// import ShopIcon from "../assets/shop-cart.svg"
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
