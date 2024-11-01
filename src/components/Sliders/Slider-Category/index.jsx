import React, {useRef, useState, useEffect} from 'react';
import { Carousel } from 'antd';
import {Container, TitleRec, MinTitleRec, Blur, Arrow } from './style.js';
import HousesCard from '../../HousesCard/index.jsx';
import data from '../../Data/dataCategory.js';

function Category() {

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: width < 1050 ? 2 : width < 1350 ? 3 : 4,
    slidesToScroll: width < 1050 ? 2 : width < 1350 ? 3 : 4,
    autoplay: true
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
      <TitleRec>Category</TitleRec>
      <MinTitleRec>{width < 580 ? '112 Glenwood Ave Hyde Park, Boston, MA' : 'Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.'}</MinTitleRec>
      <Carousel className='carousel' ref={slider} {...settings}>
        {data.map((value, index) => (
          <div className='carousel-item' key={index}>
            <HousesCard data={value} />
          </div>
        ))}
      </Carousel>
      <Arrow arrowRec=' ' onClick={onMove} data-name='left' left />
      <Arrow arrowRec=' ' onClick={onMove} data-name='right' />
    </Container>
  );
};

export default Category;
