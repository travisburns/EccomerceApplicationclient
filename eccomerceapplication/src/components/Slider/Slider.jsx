import React from 'react';
import "./Slider.scss";
import {sliderImg1} from './sliderAssets/sliderAssetsImports.jsx'




const Slider = () => {
  return (
    <div className = "hero-slider">
      <div className='hero-slider-item'>
        <img className='header' src={sliderImg1} alt="" />
      </div>
    </div>
  )
}

export default Slider


sliderImg1