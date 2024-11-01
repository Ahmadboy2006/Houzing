import React from "react";
import Slider from "react-slick";
import './style';
import Slider1_1 from '../../../../assets/img/slider1-1.jpg';
import Slider1_2 from '../../../../assets/img/slider1-2.jpg';
import Slider1_3 from '../../../../assets/img/slider1-3.jpg';
import Slider1_4 from '../../../../assets/img/slider1-4.jpg';
import Minicon1 from '../../../../assets/icons/bed.svg';
import Minicon2 from '../../../../assets/icons/bath.svg';
import Minicon3 from '../../../../assets/icons/car.svg';
import Minicon4 from '../../../../assets/icons/triangle.svg';
import Resize from '../../../../assets/icons/resize.svg';
import Love from '../../../../assets/icons/love.svg';
import {Data} from './data';
import { SliderContainer, SliderImg } from "./style";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <SliderContainer>
      <h1>Recommended</h1>
      <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <Slider {...settings}>
        <div className="card">
          <div><SliderImg src={Slider1_1} alt="Slide 1" /></div>
          <div>
            <h2><b>New Apartment Nice Wiew</b></h2>
            <p>Quincy St, Brooklyn, NY, USA</p>
            <div>
              <div><img src={Minicon1} /><p>4 Beds</p></div>
              <div><img src={Minicon2} /><p>5 Baths</p></div>
              <div><img src={Minicon3} /><p>1 Garage</p></div>
              <div><img src={Minicon4} /><p>1200 Sq Ft</p></div>
            </div>
          </div>
          <div>
            <div><p>$2,800/mo</p><h2><b>$7,500/mo</b></h2></div>
            <div><img src={Resize} /><img src={Love} /></div>
          </div>
        </div>
      </Slider>
    </SliderContainer>
  );
}

export default MultipleItems;
