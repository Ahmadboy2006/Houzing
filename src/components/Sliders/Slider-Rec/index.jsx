import React, { useRef, useState, useEffect } from 'react';
import { Arrow, Container, TitleRec, MinTitleRec } from './style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import HouseCard from '../../HouseCard/index';
import {getData as data} from '../../Data/data';

function Carousel() {
  const [houseData] = useState(data);
  const [width, setWidth] = useState(window.innerWidth);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === 'right') slider.current.next();
    if (name === 'left') slider.current.prev();
  };

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
      <TitleRec>Recommended</TitleRec>
      <MinTitleRec>
        {width < 580 ? '112 Glenwood Ave Hyde Park, Boston, MA' : 'Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.'}
      </MinTitleRec>
      <Slider className='carousel' ref={slider} {...settings}>
        {houseData.map((value, index) => (
          <div className='carousel-item' key={index}>
            <HouseCard key={index} data={value} />
          </div>
        ))}
      </Slider>
      <Arrow arrowRec=' ' onClick={onMove} data-name='left' left />
      <Arrow arrowRec=' ' onClick={onMove} data-name='right' />
    </Container>
  );
}

export default Carousel;

