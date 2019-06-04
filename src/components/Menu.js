import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Toggle from "./ToggleRPC"
import ShopIcon from "../assets/shop-cart.svg"

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: #fff;
  text-align: left;
  height: 45px;
`

const StyledLink = styled.p`
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 0 30px;
  transition: ease-in-out 0.4s;
  margin: 0;
  cursor: pointer;
  font-family: "Zilla Slab";

  @media (max-width: 670px) {
    font-size: 90%;
    padding: 0 15px;
  }

  @media (max-width: 570px) {
    font-size: 85%;
    padding: 0 10px;
  }

  @media (max-width: 381px) {
    /* font-size: 70%; */
    padding: 0 5px;
  }
`

const NavMenu = styled.ul`
  line-height: 45px;
  font-weight: 700;
  text-transform: uppercase;
  list-style: none;
  margin: 0;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`

const MenuItem = styled.li`
  display: inline-block;
  cursor: pointer;
  margin: 0;
  transition: ease-in-out 0.4s;

  &:hover {
    background-color: #fff;

    ${StyledLink} {
      color: #ffd100;
      background-color: #fff;
    }
  }
`

const NavSubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;

  @media (max-width: 670px) {
    display: block;
  }
`

const SubMenuItem = styled.li`
  margin: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const SubLink = styled(Link)`
  display: block;
  padding: 0 16px;
  margin: 0;
  text-decoration: none;
  color: #000;
  line-height: inherit;
  font-family: "Zilla Slab";
`
const SubMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 300;
  text-transform: none;
  position: absolute;
  width: 100%;
  -webkit-box-shadow: 0px 29px 31px -5px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 29px 31px -5px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 29px 31px -5px rgba(0, 0, 0, 0.19);
  margin: 0;
  background-color: #fff;
  list-style: none;
  padding: 1.75rem 1rem;
  left: 0;
  z-index: 1000;

  @media (max-width: 930px) {
    width: 100%;
  }

  @media (max-width: 670px) {
    display: block;
  }
`

const MiniCartWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  transition: ease-in-out 0.4s;

  p {
    margin: 0;

    a {
      text-decoration: none;
    }
  }
`

const MiniCart = styled.p`
  background-image: linear-gradient(
    to right bottom,
    #ff5100,
    #ff7600,
    #ff9600,
    #ffb400,
    #ffd100
  );
  font-weight: 700;
  z-index: 100;

  &:hover {
    background-image: linear-gradient(to bottom, #ffd100, #ffb400, #ff9600, #ff7600, #ff5100);
  }

  @media (max-width: 700px) {
    font-size: 80%;
    padding: 0;
    right: 45%;
  }

  @media (max-width: 381px) {
    font-size: 70%;
  }
`

const Menu = () => (
  <Nav>
    <NavMenu>
      <Toggle>
        {({ on, toggle, handleLeave }) => (
          <MenuItem onMouseLeave={handleLeave}>
            <StyledLink onClick={toggle}>Categories</StyledLink>
            {on && (
              <SubMenuContainer onMouseLeave={handleLeave}>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/all-products">All Products</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/category-eyewear">Eyewear</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/category-first-aid-medical">
                      First Aid/Medical
                    </SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/category-signs">
                      Signs
                    </SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/category-head-face-protection">
                      Head &amp; Face Protection
                    </SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/category-hand-protection">
                      Hand Protection
                    </SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/category-respiratory-protection">
                      Respiratory Protection
                    </SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/category-protective-apparel">
                      Protective Apparel
                    </SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/category-foot-protection">
                      Foot Protection
                    </SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/category-hearing-protection">
                      Hearing Protection
                    </SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  
                </NavSubMenu>
              </SubMenuContainer>
            )}
          </MenuItem>
        )}
      </Toggle>

      <Toggle>
        {({ on, toggle, handleLeave }) => (
          <MenuItem onMouseLeave={handleLeave}>
            <StyledLink onClick={toggle}>Brands</StyledLink>
            {on && (
              <SubMenuContainer onMouseLeave={handleLeave}>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/brand-ansell">Ansell</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/brand-crews">Crews</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/brand-up-safety-solutions">Up Safety Solutions</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/brand-dupont">Dupont</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/brand-gojo">Gojo</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/brand-microflex">Microflex</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/brand-west-chester">West Chester</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/brand-honeywell">Honeywell</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/brand-best-welds">Best Welds</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/brand-3-m">3M</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/brand-servus">Servus</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
              </SubMenuContainer>
            )}
          </MenuItem>
        )}
      </Toggle>

      <Toggle>
        {({ on, toggle, handleLeave }) => (
          <MenuItem onMouseLeave={handleLeave}>
            <StyledLink onClick={toggle}>Resources</StyledLink>
            {on && (
              <SubMenuContainer onMouseLeave={handleLeave}>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/about-us">About Us</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/blog">Blog</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/contact-us">Contact Us</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/shipping-return-policy">
                      Shipping &amp; Returns
                    </SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/terms-of-use">Terms of Use</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/request-a-quote">Request a Quote</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/custom-order-policy">
                      Custom Order Policy
                    </SubLink>
                  </SubMenuItem>
                </NavSubMenu>
              </SubMenuContainer>
            )}
          </MenuItem>
        )}
      </Toggle>
      <MenuItem>
      <MiniCartWrapper>
      <MiniCart data-fc-id="minicart minicart-empty">
        <a
          style={{ padding: `0 10px`, display: `flex` }}
          rel="preconnect"
          href="https://upsafetysolutions.foxycart.com/cart?cart=view"
        >
          <span style={{ width: `18px` }}>
            <ShopIcon />
          </span>
          <span style={{ color: `#111`, paddingLeft: `8px` }} data-fc-id="minicart-quantity">
            0
          </span>
        </a>
      </MiniCart>
    </MiniCartWrapper>
    </MenuItem>
    </NavMenu>
  </Nav>
)

export default Menu
