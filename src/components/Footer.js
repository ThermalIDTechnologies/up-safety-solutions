import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Btn from "./NLBtn"

import Logo from "../assets/logo-white.svg"
import FaceBook from "../assets/facebook.svg"
import Instagram from "../assets/instagram-icon.svg"
import YouTube from "../assets/youtube.svg"
import Twitter from "../assets/twitter.svg"
import Email from "../assets/email.svg"
import Stripe from "../assets/powered_by_stripe.svg"
import CreditCards from "../assets/credit-cards.svg"

const PageFooter = styled.footer`
  background: #000;
  bottom: 0;
  color: #fff;
  left: 0;
  padding: 4em 0;
  right: 0;
  width: 100%;
  margin-top: 1.45rem;
  display: grid;
  grid-template-columns: 4vw 1fr 4vw;
  grid-template-rows: auto auto;
`

const FooterContainer = styled.div`
  grid-column: 2 / 3;
  display: grid; /* ACTING AS A GRID CONTAINER */
  grid-template-columns: 2fr 2fr 2fr 3fr;
  grid-template-rows: auto auto;
  grid-template-areas: "logo navigation secondary social" "contact contact . newsletter";

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "logo social" "contact newsletter";
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: "logo" "social" "newsletter" "contact";
  }
`

const LogoWrapper = styled.div`
  grid-area: logo;
  width: 300px;

  @media (max-width: 768px) {
    justify-self: center;
    align-self: center;
    padding-bottom: 1.45rem;
  }
`

const FooterNav = styled.ul`
  grid-area: navigation;
  justify-self: center;
  margin: 0;
  padding: 0;

  @media (max-width: 960px) {
    display: none;
  }
`

const FooterSecondaryNav = styled.ul`
  grid-area: secondary;
  justify-self: center;
  margin: 0;
  padding: 0;

  @media (max-width: 960px) {
    display: none;
  }
`

const ListItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const PageLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: #fff;
  transition: all ease-in-out 0.4s;

  &:hover {
    color: #ffd100;
  }
`

const SocialNetworks = styled.div`
  grid-area: social;
  display: grid; /* ACTING AS A GRID CONTAINER */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  justify-items: center;
  border-bottom: 2px solid #ffd100;

  h3 {
    grid-column: 1 / -1;

    @media (max-width: 768px) {
      line-height: 3rem;
    }
  }
`

const ContactBlock = styled.div`
  grid-area: contact;
  align-self: end;

  @media (max-width: 768px) {
    justify-self: center;
    align-self: center;
  }
`

const OutsideLink = styled.a`
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: #fff;
  display: block;
  border: 2px solid #fff;
  padding: 0.5rem;
  margin: 10px 0 0;
  text-align: center;
  width: 70%;
  transition: all ease-in-out 0.4s;

  &:hover {
    border: 2px solid #ff5100;
    color: #ffd100;
  }

  @media (max-width: 768px) {
    margin: 5px auto;
    width: 100%;
  }
`

const NewsLetter = styled.div`
  grid-area: newsletter;
  align-self: end;

  @media (max-width: 768px) {
    padding: 1.45rem 0;
  }
`

const BottomLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #6b6b6b;
  font-size: 0.7rem;

  p {
    margin: 0;
  }
`

const EmailIconContainer = styled.div`
  width: 48px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding-top: 0;
    padding-bottom: 1rem;
  }
`

export default function Footer() {
  return (
    <>
      <PageFooter>
        <FooterContainer>
          <LogoWrapper>
            <Link to="/">
              <Logo alt="Up Safety Solutions Logo" />
            </Link>
          </LogoWrapper>
          <FooterNav>
            <ListItem>
              <PageLink to="/">Home</PageLink>
            </ListItem>
            <ListItem>
              <PageLink to="/about-us">About Us</PageLink>
            </ListItem>
            <ListItem>
              <PageLink to="/blog">Blog</PageLink>
            </ListItem>
            <ListItem>
              <PageLink to="/contact-us">Contact Us</PageLink>
            </ListItem>
          </FooterNav>
          <FooterSecondaryNav>
            <ListItem>
              <PageLink to="/request-a-quote">Request a Quote</PageLink>
            </ListItem>
            <ListItem>
              <PageLink to="/shipping-return-policy">
                Shipping &amp; Returns
              </PageLink>
            </ListItem>
            <ListItem>
              <PageLink to="/custom-order-policy">Custom Order Policy</PageLink>
            </ListItem>
            <ListItem>
              <PageLink to="/terms-of-use">Terms of Use</PageLink>
            </ListItem>
          </FooterSecondaryNav>
          <ContactBlock>
            <h3>We're happy to hear from you!</h3>
            <OutsideLink href="tel:1-888-958-5650">
              <i /> 1-888-958-5650
            </OutsideLink>
            <OutsideLink href="mailto:sales@upsafetysolutions.com">
              sales@upsafetysolutions.com
            </OutsideLink>
          </ContactBlock>
          <NewsLetter>
            <div style={{ textAlign: `center` }}>
              <EmailIconContainer>
                <a href="mailto:sales@upsafetysolutions.com">
                  <Email alt="Email Icon" />
                </a>
              </EmailIconContainer>
            </div>
            <div style={{ textAlign: `center` }}>
              <form
                style={{ margin: `0` }}
                action="/?form=success"
                name="Subscribe"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="Subscribe" />
                <input type="hidden" name="bot-field" />
                <label style={{ color: `#fff` }} htmlFor="email">
                  Subscribe to our Newsletter
                </label>
                <br />
                <input
                  style={{
                    height: `2rem`,
                    borderRadius: `3px`,
                    border: `0`,
                    marginTop: `10px`,
                  }}
                  type="email"
                  id="email"
                  name="Enter Your Email Address"
                  placeholder=" email@email.com"
                  size="20"
                  required
                />
                <Btn type="submit" value="Submit" />
              </form>
            </div>
          </NewsLetter>
          <SocialNetworks>
            <h3>View and share our content!</h3>
            <div
              style={{
                width: `48px`,
                paddingBottom: `1.2rem`,
              }}
            >
              <a href="https://www.facebook.com/Up-Safety-Solutions-435208757038430">
                <FaceBook alt="Facebook Logo" />
              </a>
            </div>
            <div style={{ width: `48px`, paddingBottom: `1.2rem` }}>
              <a href="https://www.youtube.com/channel/UCexyI71DdTJfbMUBzQ0dzTQ/featured?view_as=public">
                <YouTube alt="YouTube Logo" />
              </a>
            </div>
            <div style={{ width: `48px`, paddingBottom: `1.2rem` }}>
              <a href="https://twitter.com/up_sfty">
                <Twitter alt="Twitter Logo" />
              </a>
            </div>
            <div
              style={{
                width: `48px`,
                paddingBottom: `1.2rem`,
              }}
            >
              <a href="https://www.instagram.com/upsafetysolutions/">
                <Instagram alt="Instagram Logo" />
              </a>
            </div>
          </SocialNetworks>
        </FooterContainer>
      </PageFooter>
      <div style={{ backgroundColor: `#000`, textAlign: `center` }}>
        <CreditCards style={{ maxHeight: "36px" }} />
        <Stripe style={{ marginLeft: `8px` }} />
      </div>
      <BottomLine>
        <p>
          © {new Date().getFullYear()} Up Safety Solutions. All Rights Reserved.
        </p>
      </BottomLine>
    </>
  )
}
