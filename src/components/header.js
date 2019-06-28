import { StaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../assets/logo.svg"
import Menu from "./Menu"
import Search from "./search"

const HeaderContainer = styled.header`
  margin-bottom: -5px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.75rem 1.0875rem 1.45rem;
`

const LogoWrapper = styled.div`
  width: 450px;

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
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
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
                <Logo
                  style={{ width: `100%` }}
                  alt="Up Safety Solutions Logo"
                />
              </Link>
            </h1>
          </LogoWrapper>
        </LogoContainer>
        <Menu />
        <Search searchIndex={data.siteSearchIndex.index} />
      </HeaderContainer>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
