import React from 'react';
import SlickSlider from 'react-slick';

import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

import '../style/SlickSlider.css';
import '../style/Slider.css';

const Slider = () =>
  <div>
    <SlickSlider className="Slider" dots>
      <div>
        <Slide1 />
      </div>
      <div>
        <Slide2 />
      </div>
      <div>
        <Slide3 />
      </div>
    </SlickSlider>
  </div>;

export default Slider;
