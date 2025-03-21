import React, { useState, useEffect } from 'react';
import { Container, Img, Content, Details, Icons, Divider, IconBg, MiniImg, FeaturedStatus, ForSaleStatus } from './style';
import noimg from '../../assets/img/noImg.png';

export const HouseCard = ({ data = {} }) => {
  const {
    attachments,
    location = [],
    propDetails = [],
    salePrice,
    description,
    street
  } = data;

  const {
    city,
    country
  } = location[0] || {};

  const {
    id,
    price,
    beds,
    baths,
    garages,
    size
  } = propDetails[0] || {};

  const [isLiked, setIsLiked] = useState(localStorage.getItem(`house-${id}`) !== null);

  const like = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      localStorage.setItem(id, JSON.stringify(data));
    } else {
      localStorage.removeItem(id);
    }
  };

  const view = (value) => {
    localStorage.removeItem('viewData');
    localStorage.setItem('viewData', JSON.stringify(value));
    window.location.href = '/productview';
  };

  useEffect(() => {
    setIsLiked(localStorage.getItem(id) !== null);
  }, [id]);

  const imgSrc = attachments && attachments.length > 0 ? attachments[0].imgPath : noimg;
  const avatar = attachments && attachments.length > 0 ? attachments[0].avatar : noimg;

  return (
    <Container>
      <Img src={imgSrc} />
      <Content>
        <div className='subTitle inline'>{description}</div>
        <div className="info">{street && city && country ? `${street}, ${city}, ${country}` : 'Quincy St, Brooklyn, NY, USA'}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{beds || 0} Bed</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{baths || 0} Bath</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">{garages || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{size || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info relative">${price || 0}/mo<Details.Item.Line /></div>
          <div className="subTitle">${salePrice || 0}/mo</div>
        </Details.Item>
        <Details.Item row>
          <IconBg>
            <Icons.Resize onClick={() => view(data)} clck={isLiked} />
          </IconBg>
          <IconBg onClick={like} clck={isLiked} >
            <Icons.Love clck={isLiked} />
          </IconBg>
        </Details.Item>
      </Content>
      <MiniImg src={avatar} />
      <FeaturedStatus>FEATURED</FeaturedStatus>
      <ForSaleStatus>FOR SALE</ForSaleStatus>
    </Container>
  );
};

export default HouseCard;


