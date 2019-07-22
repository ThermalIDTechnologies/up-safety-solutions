import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInterval } from "./useInterval"

import Slide from "./Slide"

import { SliderWrapper, ButtonWrapper, Button } from "./HeroSliderStyles"

const HeroSlider = () => {
  const {
    slides: { edges: slides },
  } = useStaticQuery(graphql`
    query slider {
      slides: allPrismicCarousel(sort: {fields: id, order: ASC}) {
        edges {
          node {
            data {
              alt {
                text
              }
              banner_image {
                localFile {
                  childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              banner_text {
                text
              }
              button_text {
                text
              }
              url {
                text
              }
            }
          }
        }
      }
    }
  `)
  console.log(slides)
  const [state, setState] = useState({
    slides,
    activeIndex: 0,
    autoSlide: true,
    interval: 7000,
  })

  // By Dan Abramov overreacted.io
  useInterval(
    () => {
      setState(prev => ({
        ...prev,
        activeIndex: (prev.activeIndex + 1) % prev.slides.length,
      }))
    },
    state.autoSlide ? state.interval : null
  )

  const handlePrevClick = () => {
    setState(prev => ({
      ...prev,
      autoSlide: false,
      activeIndex:
        (prev.activeIndex - 1 + prev.slides.length) % prev.slides.length,
    }))
  }

  const handleNextClick = () => {
    setState(prev => ({
      ...prev,
      autoSlide: false,
      activeIndex: (prev.activeIndex + 1) % prev.slides.length,
    }))
  }

  return (
    <SliderWrapper>
      {slides.map((slide, i) => (
        <Slide
          key={slide.node.id}
          slide={slide.node}
          active={state.activeIndex === i}
        />
      ))}
      <ButtonWrapper style={{ position: "absolute", left: 0 }}>
        <Button onClick={handlePrevClick}>&laquo;</Button>
      </ButtonWrapper>
      <ButtonWrapper style={{ position: "absolute", right: 0 }}>
        <Button onClick={handleNextClick}>&raquo;</Button>
      </ButtonWrapper>
    </SliderWrapper>
  )
}

export default HeroSlider
