import React, { useEffect, useRef, useState } from 'react';
import { Container, MainContainer, MainTitle, MainContent, Input, Map, MediaContent, AtsContent } from './style';
import { Content } from '../MyProperties/style';
import Footer from '../Footer';
import map from '../../assets/img/map.png';
import Button from '../Generic/Button';
import Column1 from '../Data/AddNewPropData/column1';
import Column2 from '../Data/AddNewPropData/column2';
import Column3 from '../Data/AddNewPropData/column3';
import Column4 from '../Data/AddNewPropData/column4';
import Additional from '../Data/AddNewPropData/additional';

function AddNewProp() {

    const [data, setData] = useState({
        homeIndex: null,
        attachments: [],
        location: [{
            street: "",
            state: "",
            city: "",
            zipcode: null,
            area: "",
            country: "",
        }],
        propDetails: [{
            id: null,
            price: null,
            size: null,
            yearBuild: '',
            beds: null,
            baths: null,
            garages: null,
            garageSize: null,
            type: "",
            status: ""
        }],
        salePrice: '',
        description: '',
        rooms: '',
        sort: ''
    });

    const city = useRef();
    const homeIndex = useRef();

    const onTyping = (e) => {
        const { name, value } = e.target;
        setData(prevstate => ({
            ...prevstate,
            [name]: value,
            location: prevstate.location.map((loc) =>
                name in loc ? { ...loc, [name]: value } : loc
            ),
            propDetails: prevstate.propDetails.map((details) =>
                name in details ? { ...details, [name]: value } : details
            )
        }));
    };

    const onSubmit = () => {
        const address = `${data.homeIndex} ${data.location[0].street} Street`;

        const updatedData = {
            ...data,
            location: data.location.map(loc => ({
                ...loc,
                address
            }))
        };

        const storedData = JSON.parse(localStorage.getItem('houseCard')) || [];
        localStorage.setItem('houseCard', JSON.stringify([...storedData, updatedData]));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
    
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const base64String = event.target.result;
    
            setData(prevState => ({
                ...prevState,
                attachments: [...prevState.attachments, base64String]
            }));
        };
        
        reader.readAsDataURL(files[0]);
    };

    return (
        <>
            <Container>
                <Content.Header.Title>Add new property</Content.Header.Title>
                <MainContainer>
                    <MainTitle>Contact information</MainTitle>
                    <MainContent>
                        <Input onChange={onTyping} placeholder='Property title' />
                        <Input onChange={onTyping} name='type' placeholder='Type*' />
                        <Input onChange={onTyping} name='description' width='100%' placeholder='Property Description*' />
                    </MainContent>
                </MainContainer>
                <MainContainer>
                    <MainTitle>Additional</MainTitle>
                    <MainContent add>
                        {Additional.map((value, index) => (
                            <Input onChange={onTyping} min={0} type={value.type} name={value.name} key={index} width='30%' mini placeholder={value.title} />
                        ))}
                    </MainContent>
                </MainContainer>
                <MainContainer>
                    <MainTitle>Price</MainTitle>
                    <MainContent>
                        <Input type='number' onChange={onTyping} name='price' placeholder='Price ($)*' />
                        <Input placeholder='Price Prefix' />
                        <Input placeholder='Price Suffix' />
                        <Input type='number' onChange={onTyping} name='salePrice' placeholder='Price Custom*' />
                    </MainContent>
                </MainContainer>
                <MainContainer>
                    <MainTitle>Location</MainTitle>
                    <MainContent>
                        <Input placeholder='Regions' />
                        <Input placeholder='Friendly address' />
                        <Input onChange={onTyping} ref={city} name='city' placeholder='City*' />
                        <Input onChange={onTyping} name='country' placeholder='Country*' />
                        <Input onChange={onTyping} name='street' placeholder='Street*' />
                        <Input onChange={onTyping} name='state' placeholder='State*' />
                        <Input onChange={onTyping} min={0} type='number' name='zipcode' placeholder='Zipcode*' />
                        <Input onChange={onTyping} name='area' placeholder='Area*' />
                        <Input onChange={onTyping} ref={homeIndex} min={0} type='number' name='homeIndex' placeholder='HomeIndex*' />
                        <Input width='100%' placeholder='Map location' />
                        <Map src={map} />
                        <Input placeholder='Latidude' />
                        <Input placeholdre='Logtitude' />
                    </MainContent>
                </MainContainer>
                <MainContainer>
                    <MainTitle>Media</MainTitle>
                    <MediaContent>
                        <MediaContent.Title>Featured image</MediaContent.Title>
                        <MediaContent.ImgBox>
                            <MediaContent.ImgBox.Img />
                            <MediaContent.ImgBox.Img />
                            <MediaContent.ImgBox.Img />
                            <MediaContent.ImgBox.Img />
                        </MediaContent.ImgBox>
                        <Button type='blue'>Upload</Button>
                        <MediaContent.Title>Gallery</MediaContent.Title>
                        <Input type='file' multiple onChange={handleImageUpload}></Input>
                        <Button type='blue'>Upload</Button>
                        <MediaContent.Title>Attachment</MediaContent.Title>
                        <div className='flex1'>
                            <MediaContent.DownloadIcon />
                            <MediaContent.Title>test_property.pdf</MediaContent.Title>
                        </div>
                        <Button type='blue'>Upload</Button>
                        <Input width='100%' placeholder='Video link' />
                        <Input width='100%' placeholder='Virtual tour' />
                    </MediaContent>
                </MainContainer>
                <MainContainer ats>
                    <MainTitle>Amenities</MainTitle>
                    <AtsContent>
                        <div className='column'>
                            {Column1.map((value, index) => (
                                <AtsContent.Item key={index}>
                                    <AtsContent.Item.Input name={value.name} type="checkbox" />
                                    <AtsContent.Item.Title>{value.title}</AtsContent.Item.Title>
                                </AtsContent.Item>
                            ))}
                        </div>
                        <div className='column'>
                            {Column2.map((value, index) => (
                                <AtsContent.Item key={index}>
                                    <AtsContent.Item.Input name={value.name} type="checkbox" />
                                    <AtsContent.Item.Title>{value.title}</AtsContent.Item.Title>
                                </AtsContent.Item>
                            ))}
                        </div>
                        <div className='column'>
                            {Column3.map((value, index) => (
                                <AtsContent.Item key={index}>
                                    <AtsContent.Item.Input name={value.name} type="checkbox" />
                                    <AtsContent.Item.Title>{value.title}</AtsContent.Item.Title>
                                </AtsContent.Item>
                            ))}
                        </div>
                        <div className='column'>
                            {Column4.map((value, index) => (
                                <AtsContent.Item key={index}>
                                    <AtsContent.Item.Input name={value.name} type="checkbox" />
                                    <AtsContent.Item.Title>{value.title}</AtsContent.Item.Title>
                                </AtsContent.Item>
                            ))}
                        </div>
                    </AtsContent>
                </MainContainer>
                <MainContainer>
                    <MainTitle>Select Energy Class</MainTitle>
                    <MainContent>
                        <Input placeholder='Energy class' />
                        <Input placeholder='Energy Index in kWh/m2a' />
                    </MainContent>
                </MainContainer>
                <Button onClick={onSubmit} type='primary' width='280'>Submit</Button>
            </Container>
            <Footer />
        </>

    )
};

export default AddNewProp;
