import React, { useEffect, useState } from 'react';
import { Container, Title, TitleMini } from './style';
import HouseCard from '../HouseCard';
import Header from '../Header/Index';
import { getData as getHouseData } from '../Data/data';
import Footer from '../Footer';

export const Properties = () => {
  const [txt, setTxt] = useState(false);
  const [houseData, setHouseData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {

    const initialData = getHouseData();
    setHouseData(initialData);
    setFilteredData(initialData);

    const handleResize = () => {
      setTxt(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (sortData) => {
    const sortedData = houseData.filter((house) => {
        const location = house.location[0] || {};
        const propDetails = house.propDetails[0] || {};

        return (
            (!sortData.city || location.city.toLowerCase().includes(sortData.city.toLowerCase())) &&
            (!sortData.country || location.country.toLowerCase().includes(sortData.country.toLowerCase())) &&
            (!sortData.description || house.description.toLowerCase().includes(sortData.description.toLowerCase())) &&
            (!sortData.zip || location.zipcode.toLowerCase().includes(sortData.zip.toLowerCase())) &&
            (!sortData.rooms || propDetails.beds >= parseInt(sortData.rooms)) &&
            (!sortData.size || propDetails.size >= parseInt(sortData.size)) &&
            (!sortData.minPrice || house.salePrice >= parseInt(sortData.minPrice)) &&
            (!sortData.maxPrice || house.salePrice <= parseInt(sortData.maxPrice))
        );
    });
    setFilteredData(sortedData);
};

  return (
    <div className='prop-Wrapper'>
      <Header onSearch={handleSubmit} />
      <div className='prop-Container'>
        <Title>Properties</Title>
        <TitleMini>
          {txt ? '112 Glenwood Ave Hyde Park, Boston, MA' : 'Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.'}
        </TitleMini>
        <Container>
          {filteredData.map((value) => (
            <HouseCard key={value.id} data={value} />
          ))}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
