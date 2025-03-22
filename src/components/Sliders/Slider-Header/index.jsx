import React, { useRef, useState, useEffect } from 'react';
import { Carousel } from 'antd';
import Slider1_1 from '../../../assets/img/slider1-1.jpg';
import Slider1_2 from '../../../assets/img/slider1-2.jpg';
import Slider1_3 from '../../../assets/img/slider1-3.jpg';
import Slider1_4 from '../../../assets/img/slider1-4.jpg';
import { SliderImg, Arrow, Container, Blur, Content } from './style';
import { Details, Icons } from '../../HouseCard/style';
import Button from '../../Generic/Button';
import Header from '../../Header/Index';
import { Link } from 'react-router-dom';

function Slider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false
  };

  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === 'right') slider.current.next();
    if (name === 'left') slider.current.prev();
  }

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
      <Carousel ref={slider} {...settings}>
        <div>
          <SliderImg src={Slider1_1} alt="Slide 1" />
        </div>
        <div>
          <SliderImg src={Slider1_2} alt="Slide 2" />
        </div>
        <div>
          <SliderImg src={Slider1_3} alt="Slide 3" />
        </div>
        <div>
          <SliderImg src={Slider1_4} alt="Slide 4" />
        </div>
        <div>
          <SliderImg src={Slider1_3} alt="Slide 5" />
        </div>
      </Carousel>
      <Blur />
      <Content>
        <div className='content'>
          <Content.Title>Skyper Pool Partment</Content.Title>
          <Content.Desc className='subChild'>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
          <Details homePage=' '>
            <Details.Item>
              <Icons.Bed white />
              <div className="info white">4 Bed </div>
            </Details.Item>
            <Details.Item>
              <Icons.Bath white />
              <div className="info white">5 Bath </div>
            </Details.Item>
            <Details.Item>
              <Icons.Garage white />
              <div className="info white">1 Garage </div>
            </Details.Item>
            <Details.Item>
              <Icons.Ruler white />
              <div className="info white">1200 Sq Ft </div>
            </Details.Item>
          </Details>
          <Content.Price>$5,250 / mo</Content.Price>
          <Link to={'/Properties'}><Button type='dark' width='180' margin='50px 0 0 0'>Read more</Button></Link>
        </div>
        {width < 600 && <Header width=' '></Header>}
      </Content>
      <Arrow onClick={onMove} data-name='left' left />
      <Arrow onClick={onMove} data-name='right' />
    </Container>
  );
}

export default Slider;