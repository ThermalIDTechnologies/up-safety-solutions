import React from 'react';
import { Link } from 'gatsby';

import { StyledImg, WbnSlide } from './HeroSliderStyles';

const Slide = ({ slide, active }) => (
  <WbnSlide className={active ? 'active' : ''}>
    <StyledImg fluid={slide.data.banner_image.localFile.childImageSharp.fluid} />
    <div className="wbn-overlay-text">
      <h1 className="wbn-header"><span >{slide.data.banner_text.text}</span></h1>
      <Link to={slide.data.url.text}>
        <button type="button">{slide.data.button_text.text}</button>
      </Link>
    </div>
  </WbnSlide>
);

export default Slide;
