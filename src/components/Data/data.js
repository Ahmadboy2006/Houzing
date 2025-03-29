import SliderImg3 from '../../assets/img/slider1-1.jpg';
import SliderImg1 from '../../assets/img/slider1-3.jpg';
import SliderImg2 from '../../assets/img/slider1-4.jpg';
import Avatar1 from '../../assets/img/avatar1.png';
import Avatar2 from '../../assets/img/avatar2.png';
import Avatar3 from '../../assets/img/avatar3.png';
import axios from 'axios';


const data = [
  {
    homeIndex: 329,
    attachments: [{ imgPath: SliderImg1, avatar: Avatar1 }],
    location: [{
      adress: '329 Main Street',
      street: 'Main St',
      state: "California",
      city: "San Francisco",
      zipcode: 94105,
      area: 'Downtown',
      country: "USA",
    }],
    propDetails: [{
      id: 1,
      price: 2700,
      size: 1500,
      yearBuild: '2021-01-09',
      beds: 3,
      baths: 2,
      garages: 1,
      garageSize: 200,
      type: 'Apartment',
      status: 'For Sale'
    }],
    salePrice: 2500,
    description: "Beautiful house in San Francisco",
    rooms: 5,
  },
  {
    homeIndex: 421,
    attachments: [{ imgPath: SliderImg2,avatar: Avatar2 }],
    location: [{
      street: 'Elm St',
      state: "Texas",
      city: "Austin",
      zipcode: "73301",
      area: 'Suburb',
      country: "USA",
    }],
    propDetails: [{
      id: 2,
      price: 3500,
      size: 2000,
      yearBuild: '2015-06-15',
      beds: 4,
      baths: 3,
      garages: 2,
      garageSize: 400,
      type: 'House',
      status: 'For Rent'
    }],
    salePrice: 3200,
    description: "Spacious family home in Austin",
    rooms: 7,
  },
  {
    homeIndex: 582,
    attachments: [{ imgPath: SliderImg3, avatar: Avatar3 }],
    location: [{
      street: 'Oak St',
      state: "Washington",
      city: "Seattle",
      zipcode: "98101",
      area: 'Downtown',
      country: "USA",
    }],
    propDetails: [{
      id: 3,
      price: 4800,
      size: 1200,
      yearBuild: '2018-11-21',
      beds: 2,
      baths: 2,
      garages: 0,
      garageSize: 0,
      type: 'Apartment',
      status: 'For Sale'
    }],
    salePrice: 4500,
    description: "Luxurious apartment in Seattle",
    rooms: 4,
  },
  {
    homeIndex: 110,
    attachments: [{ imgPath: SliderImg1, avatar: Avatar1 }],
    location: [{
      street: 'Pine St',
      state: "Colorado",
      city: "Denver",
      zipcode: "80202",
      area: 'Highlands',
      country: "USA",
    }],
    propDetails: [{
      id: 4,
      price: 3000,
      size: 1400,
      yearBuild: '2010-04-30',
      beds: 3,
      baths: 2,
      garages: 1,
      garageSize: 300,
      type: 'Townhouse',
      status: 'For Rent'
    }],
    salePrice: 2800,
    description: "Cozy home in Denver",
    rooms: 5,
  },
  {
    homeIndex: 253,
    attachments: [{ imgPath: SliderImg2, avatar: Avatar2 }],
    location: [{
      street: 'Maple St',
      state: "Florida",
      city: "Miami",
      zipcode: "33101",
      area: 'Bayside',
      country: "USA",
    }],
    propDetails: [{
      id: 5,
      price: 5800,
      size: 3000,
      yearBuild: '2017-08-12',
      beds: 5,
      baths: 4,
      garages: 3,
      garageSize: 600,
      type: 'Villa',
      status: 'For Sale'
    }],
    salePrice: 5500,
    description: "Spacious villa in Miami",
    rooms: 9,
  },
  {
    homeIndex: 374,
    attachments: [{ imgPath: SliderImg3, avatar: Avatar3 }],
    location: [{
      street: 'Cedar St',
      state: "Georgia",
      city: "Atlanta",
      zipcode: "30301",
      area: 'Midtown',
      country: "USA",
    }],
    propDetails: [{
      id: 6,
      price: 4000,
      size: 1600,
      yearBuild: '2019-02-10',
      beds: 3,
      baths: 2,
      garages: 1,
      garageSize: 350,
      type: 'House',
      status: 'For Rent'
    }],
    salePrice: 3750,
    description: "Modern home in Atlanta",
    rooms: 5,
  },
  {
    homeIndex: 478,
    attachments: [{ imgPath: SliderImg1, avatar: Avatar1 }],
    location: [{
      street: 'Birch St',
      state: "Illinois",
      city: "Chicago",
      zipcode: "60601",
      area: 'Lincoln Park',
      country: "USA",
    }],
    propDetails: [{
      id: 7,
      price: 6300,
      size: 3500,
      yearBuild: '2020-10-15',
      beds: 5,
      baths: 4,
      garages: 2,
      garageSize: 500,
      type: 'Mansion',
      status: 'For Sale'
    }],
    salePrice: 6000,
    description: "Luxurious house in Chicago",
    rooms: 9,
  },
  {
    homeIndex: 198,
    attachments: [{ imgPath: SliderImg2, avatar: Avatar2 }],
    location: [{
      street: 'Willow St',
      state: "New York",
      city: "New York",
      zipcode: "10001",
      area: 'Manhattan',
      country: "USA",
    }],
    propDetails: [{
      id: 8,
      price: 3200,
      size: 1100,
      yearBuild: '2012-07-18',
      beds: 2,
      baths: 1,
      garages: 0,
      garageSize: 0,
      type: 'Apartment',
      status: 'For Rent'
    }],
    salePrice: 2900,
    description: "Cozy apartment in New York",
    rooms: 3,
  },
  {
    homeIndex: 540,
    attachments: [{ imgPath: SliderImg3, avatar: Avatar3 }],
    location: [{
      street: 'Poplar St',
      state: "Massachusetts",
      city: "Boston",
      zipcode: "02101",
      area: 'Back Bay',
      country: "USA",
    }],
    propDetails: [{
      id: 9,
      price: 4300,
      size: 2100,
      yearBuild: '2014-05-22',
      beds: 4,
      baths: 3,
      garages: 1,
      garageSize: 400,
      type: 'House',
      status: 'For Sale'
    }],
    salePrice: 4100,
    description: "Spacious house in Boston",
    rooms: 7,
  },
  {
    homeIndex: 609,
    attachments: [{ imgPath: SliderImg1, avatar: Avatar1 }],
    location: [{
      street: 'Cypress St',
      state: "California",
      city: "San Diego",
      zipcode: "92101",
      area: 'La Jolla',
      country: "USA",
    }],
    propDetails: [{
      id: 10,
      price: 5400,
      size: 4000,
      yearBuild: '2016-09-11',
      beds: 6,
      baths: 5,
      garages: 3,
      garageSize: 700,
      type: 'Villa',
      status: 'For Sale'
    }],
    salePrice: 5100,
    description: "Luxury villa in San Diego",
    rooms: 11,
  },
  {
    homeIndex: 325,
    attachments: [{ imgPath: SliderImg2, avatar: Avatar2 }],
    location: [{
      street: 'Cherry St',
      state: "Florida",
      city: "Orlando",
      zipcode: "32801",
      area: 'Downtown',
      country: "USA",
    }],
    propDetails: [{
      id: 11,
      price: 3400,
      size: 1500,
      yearBuild: '2013-12-20',
      beds: 3,
      baths: 2,
      garages: 1,
      garageSize: 300,
      type: 'Apartment',
      status: 'For Rent'
    }],
    salePrice: 3200,
    description: "Modern apartment in Orlando",
    rooms: 5,
  },
  {
    homeIndex: 217,
    attachments: [{ imgPath: SliderImg3, avatar: Avatar3 }],
    location: [{
      street: 'Spruce St',
      state: "Texas",
      city: "Houston",
      zipcode: "77001",
      area: 'Heights',
      country: "USA",
    }],
    propDetails: [{
      id: 12,
      price: 2200,
      size: 1300,
      yearBuild: '2008-03-15',
      beds: 2,
      baths: 2,
      garages: 1,
      garageSize: 250,
      type: 'Condo',
      status: 'For Sale'
    }],
    salePrice: 2000,
    description: "Cozy condo in Houston",
    rooms: 4,
  }
];

export const initializeData = () => {
  localStorage.removeItem('houseCard');
  localStorage.setItem('houseCard', JSON.stringify(data));
};

export const getData = () => {
  const storedData = JSON.parse(localStorage.getItem('houseCard')) || [];
  return storedData;
};

const fetchProperties = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      console.error("Token topilmadi, iltimos, qayta login qiling.");
      return;
    }

    const response = await axios.get(
      "https://houzing-api.up.railway.app/api/propertys/all",
      {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "*/*",
        },
      }
    );

    console.log("Propertylar:", response.data);
  } catch (error) {
    console.error("Xatolik yuz berdi:", error.response?.data || error.message);
  }
};

// fetchProperties()