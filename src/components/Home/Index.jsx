import React, { useState } from "react";
import { Container } from "./style";
import Slider from "../Sliders/Slider-Header";
import Header from "../Header/Index";
import Modal from "../Modal";
import SliderRec from "../Sliders/Slider-Rec";
import WhyChooseUs from "../WhyChooseUs";
import Category from "../Sliders/Slider-Category";
import FarmHouse from "../FarmHouse";
import SliderProp from "../Sliders/Slider-Prop";
import Testimonials from "../Sliders/Slider-Test";
import Footer from "../Footer";
import { Container as Box } from "../Properties/style";
import HouseCard from "../HouseCard";
import { getData } from '../Data/data';

function Home() {

  const [state, setState] = useState({
    advanced: false,
  });

  const [box, setBox] = useState(false);

  const [houseData, setHouseData] = useState(getData())

  const toggleAdvanced = () => {
    setState((prevState) => ({
      ...prevState,
      advanced: !prevState.advanced
    }));
  };

  const handleSubmit = (sortData) => {
    if (Object.values(sortData).every(value => value === '')) {
      setBox(false);
      return;
    }

    let SortedData = getData().filter((house) => {
      const location = house.location[0] || {};
      const propDetails = house.propDetails[0] || {};

      return (
        (!sortData.city || location.city.toLowerCase().includes(sortData.city.toLowerCase())) &&
        (!sortData.country || location.country.toLowerCase().includes(sortData.country.toLowerCase())) &&
        (!sortData.state || location.state.toLowerCase().includes(sortData.state.toLowerCase())) &&
        (!sortData.zip || location.zipcode === parseInt(sortData.zip)) &&
        (!sortData.rooms || parseInt(house.rooms) >= parseInt(sortData.rooms)) &&
        (!sortData.size || parseInt(propDetails.size) >= parseInt(sortData.size)) &&
        (!sortData.type || propDetails.type.toLowerCase().includes(sortData.type.toLowerCase())) &&
        (!sortData.minPrice || parseInt(house.salePrice) >= parseInt(sortData.minPrice)) &&
        (!sortData.maxPrice || parseInt(house.salePrice) <= parseInt(sortData.maxPrice))
      );
    });
    setHouseData(SortedData);
    setBox(SortedData.length > 0)
  };

  return (
    <>
      <Container>
        <Header onSearch={handleSubmit} none=' ' toggleAdvanced={toggleAdvanced}></Header>
        {state.advanced &&
          <Modal toggleAdvanced={toggleAdvanced}></Modal>
        }
        {box &&
          <Box>
            {houseData.map((value) => (
              <HouseCard key={value.id} data={value} />
            ))}
          </Box>
        }
        <Slider />
        <SliderRec />
        <WhyChooseUs />
        <Category />
        <FarmHouse />
        <SliderProp />
        <Testimonials />
        <Footer />
      </Container>
    </>
  );
}

export default Home;

