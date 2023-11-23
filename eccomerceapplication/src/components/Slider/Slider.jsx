import React from 'react';
import "./Slider.scss";
import sliderimg1 from "../../utils/images.jsx"




const Slider = () => {
  console.log("This is SLIDER IMAGE!");
  return (
    <div className = "hero-slider">
      <div className='hero-slider-item'>
        <img src = {sliderimg1} alt = "" />
      </div>
    </div>
  )
}

export default Slider