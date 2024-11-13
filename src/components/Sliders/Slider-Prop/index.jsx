import React, { useRef, useState, useEffect } from 'react';
import { Carousel } from 'antd';
import { Arrow, Container, TitleRec, MinTitleRec } from './style';

import HouseCard from '../../HouseCard/index';
import {getData as data} from '../../Data/data';

function RecentProp() {
  const [houseData] = useState(data);
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: width < 900 ? 1 : width < 1350 ? 2 : 3 ,
    slidesToScroll: width < 900 ? 1 : width < 1350 ? 2 : 3,
    autoplay: true,
    dots: false,
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

  

  return (
    <Container>
      <TitleRec>Recent Properties for Rent</TitleRec>
      <MinTitleRec>{ width < 580 ? '112 Glenwood Ave Hyde Park, Boston, MA' : 'Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.'}</MinTitleRec>
      <Carousel className='carousel' ref={slider} {...settings}>
        {houseData.map((value, index) => (
          <div className='carousel-item' key={index}>
            <HouseCard key={index} data={value} />
          </div>
        ))}
      </Carousel>
      <Arrow arrowRec=' ' onClick={onMove} data-name='left' left />
      <Arrow arrowRec=' ' onClick={onMove} data-name='right' />
    </Container>
  );
}

export default RecentProp;

