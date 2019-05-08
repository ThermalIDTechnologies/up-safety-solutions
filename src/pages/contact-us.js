import React from "react"
import styled from "styled-components"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Btn from "../components/NLBtn"

const ContactForm = styled.form`
  max-width: 400px;
`

const StyledInput = styled.input`
  height: 2rem;
  border-radius: 3px;
  border: 1px solid #6b6b6b;
  display: block;
  width: 100%;
  padding: 0.3em;
`

const StyledTextarea = styled.textarea`
  border-radius: 3px;
  border: 1px solid #6b6b6b;
  display: block;
  width: 100%;
  padding: 0.3em;
`

const StyledLabel = styled.label`
  font-weight: 600;
`

const SuccessMessage = styled.div`
  width: 100%;
  background-color: #ffd100;
  text-align: center;
  color: #fff;
  animation-name: fade-out;
  animation-duration: 6s;

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

const ContactUs = () => {
  const [submitted, setSubmitted] = React.useState(false)

  React.useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search)
    let form = searchParams.get("form")

    if (form === "success") {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }
  }, [])

  return (
    <Layout>
      <PageTransition>
        {submitted && (
          <SuccessMessage>
            <h3>Thanks for your submission!</h3>
          </SuccessMessage>
        )}
        <h1>CONTACT US</h1>
        <h4>Phone: 999-999-4321</h4>
        <h4>Email: sales@upsafetysolutions.com</h4>
        <SEO title="Contact Us" />
        <ContactForm
          action="/contact-us/?form=success"
          name="Contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="Contact" />
          <input type="hidden" name="bot-field" />
          <div data-netlify-recaptcha="true" />
          <p>
            <StyledLabel>
              Your Name: <StyledInput type="text" name="name" />
            </StyledLabel>
          </p>
          <p>
            <StyledLabel>
              Your Email:{" "}
              <StyledInput
                style={{ marginLeft: `.2rem` }}
                type="email"
                name="email"
                required
              />
            </StyledLabel>
          </p>
          <p>
            <StyledLabel>
              Message: <StyledTextarea name="message" />
            </StyledLabel>
          </p>
          <p>
            <Btn type="submit">Send</Btn>
          </p>
        </ContactForm>
      </PageTransition>
    </Layout>
  )
}

export default ContactUs
