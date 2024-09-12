import React, {useEffect, useState, useRef} from 'react';
import { Container } from './style.js';
import { TitleRec, MinTitleRec } from '../Slider-Prop/style.js';
import TestCard from '../../TestCard/index.jsx';
import dataTest from '../../Data/dataTest.js';
import { Carousel as Slider } from 'antd';

function Testimonials() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = useRef();

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <Container>
      <TitleRec>Testimonials</TitleRec>
      <MinTitleRec>{width < 580 ? '112 Glenwood Ave Hyde Park, Boston, MA' : 'Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.'}</MinTitleRec>
      <Slider ref={slider} {...settings}>
        {dataTest.map((value, index) => (
          <div className='carousel-item' key={index}>
            <TestCard key={index} dataTest={value} />
          </div>
        ))}
      </Slider>
      
    </Container>
  )
}

export default Testimonials
