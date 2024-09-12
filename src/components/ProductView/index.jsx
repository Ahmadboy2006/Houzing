import React, { useEffect, useState } from 'react';
import Footer from '../Footer/index';
import { Container, Header, WriteReview, Detailss, IconBox, Location, PropDetails, Star } from './style';
import { IconBg, Icons } from '../HouseCard/style';
import { Details } from '../HouseCard/style';
import Button from '../Generic/Button';
import { Input } from '../AddNewProp/style';
import Img2 from '../../assets/img/viewImg2.png';
import Img3 from '../../assets/img/viewImg3.png';
import Img4 from '../../assets/img/viewImg4.png';
import Img5 from '../../assets/img/viewImg5.jpg';
import Avatar from '../../assets/img/avatar1.png';
import locationImg from '../../assets/img/location.png';

function ProductView() {

    useEffect(() => {
        const viewData = localStorage.getItem('viewData');
        if (viewData) {
            try {
                const parsedData = JSON.parse(viewData);
                setData(parsedData);
                setIsLiked(localStorage.getItem(`${parsedData.propDetails[0]?.id}`) !== null);
            } catch (error) {
                console.error('Error parsing viewData:', error);
            }
        }
    }, []);
    const [data, setData] = useState({});
    
    const {
        attachments = [],
        location = [],
        propDetails = [],
        salePrice,
        description,
        street
    } = data;

    const Img1 = attachments[0]?.imgPath;
    const { address, state, city, zipcode, area, country } = location[0] || {};
    const { id, price, size, yearBuild, beds, baths, garages, garageSize, type, status } = propDetails[0] || {};

    const [isLiked, setIsLiked] = useState(localStorage.getItem(`${id}`) !== null);
    
    const like = () => {
        setIsLiked(!isLiked);
        if (!isLiked) {
            localStorage.setItem(`${id}`, JSON.stringify(data));
        } else {
            localStorage.removeItem(`${id}`);
        }
    };
    
    
    const createReviewItem = (name) => ({
        name,
        stars: [
            { id: 1, star: false, icon: Star },
            { id: 2, star: false, icon: Star },
            { id: 3, star: false, icon: Star },
            { id: 4, star: false, icon: Star },
            { id: 5, star: false, icon: Star }
        ],
    });

    const [reviewData1, setReviewData1] = useState([
        createReviewItem('Cleanliness'),
        createReviewItem('Communication'),
        createReviewItem('Check-in')
    ]);

    const [reviewData2, setReviewData2] = useState([
        createReviewItem('Accuracy'),
        createReviewItem('Location'),
        createReviewItem('Value')
    ]);

    const onStar = (id) => {

    }



    const renderDetails = (label, value) => (
        <Detailss.Item>
            <div className="info"><span className='label'>{label}:</span> {value || 0}</div>
        </Detailss.Item>
    );

    return (
        <>
            <Container>
                <Header>
                    <Header.ImgBox>
                        <Header.ImgBox.MainImg src={Img1} />
                        <Header.ImgBox.OtherImg src={Img2} one />
                        <Header.ImgBox.OtherImg src={Img3} two />
                        <Header.ImgBox.OtherImg src={Img4} three />
                        <Header.ImgBox.OtherImg src={Img5} four />
                    </Header.ImgBox>
                    <Header.Content>
                        <Header.Content.Main>
                            <Header.Content.Main.St>
                                <div className='subTitlee inline'>{description}</div>
                                <div className="infoo">{street && city && country ? `${street}, ${city}, ${country}` : 'Quincy St, Brooklyn, NY, USA'}</div>
                                <Detailss>
                                    <Detailss.Item>
                                        <Icons.Bed />
                                        <div className="info">{beds || 0} Bed</div>
                                    </Detailss.Item>
                                    <Detailss.Item>
                                        <Icons.Bath />
                                        <div className="info">{baths || 0} Bath</div>
                                    </Detailss.Item>
                                    <Detailss.Item>
                                        <Icons.Garage />
                                        <div className="info">{garages || 0} Garage</div>
                                    </Detailss.Item>
                                    <Detailss.Item>
                                        <Icons.Ruler />
                                        <div className="info">{size || 0} Sq Ft</div>
                                    </Detailss.Item>
                                    <Detailss.Item>
                                        <Icons.Calendar />
                                        <div className="info">Year Built: {yearBuild || 0}</div>
                                    </Detailss.Item>
                                </Detailss>
                            </Header.Content.Main.St>
                            <Header.Content.Main.Nd>
                                <div className='flex'>
                                    <Detailss.Item gap>
                                        <IconBox>
                                            <IconBg>
                                                <Icons.Share />
                                            </IconBg>
                                            <div className='info'>Share</div>
                                        </IconBox>
                                        <IconBox>
                                            <IconBg onClick={like} clck={isLiked}>
                                                <Icons.Love clck={isLiked} view />
                                            </IconBg>
                                            <div className='info'>Save</div>
                                        </IconBox>
                                    </Detailss.Item>
                                </div>
                                <Detailss.Item>
                                    <div className="info relative">${price || 0}/mo<Details.Item.Line /></div>
                                    <div className="priceTitle">${salePrice || 0}/mo</div>
                                </Detailss.Item>
                                <div className='info'></div>
                            </Header.Content.Main.Nd>
                        </Header.Content.Main>
                        <Header.Content.Desc>
                            <Header.Content.Desc.Title>Description</Header.Content.Desc.Title>
                            <Header.Content.Desc.Section>
                                <div className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quo a quae quam omnis! Maxime modi dolorum quod excepturi blanditiis sapiente odio atque porro totam necessitatibus optio voluptatum sed, suscipit delectus est laudantium temporibus dolorem praesentium. Facere nam expedita impedit itaque qui magnam natus, veritatis cumque nesciunt dolorem excepturi reiciendis, non delectus nostrum ad ducimus modi deleniti?</div>
                                <div className='info'> Maxime modi dolorum quod excepturi blanditiis sapiente odio atque porro totam necessitatibus optio voluptatum sed, suscipit delectus est laudantium temporibus dolorem praesentium. Facere nam expedita impedit itaque qui magnam natus, veritatis cumque nesciunt dolorem excepturi reiciendis, non delectus nostrum ad ducimus modi deleniti?</div>
                                <Header.Content.Desc.Section.Link href='#'>Show more</Header.Content.Desc.Section.Link>
                            </Header.Content.Desc.Section>
                        </Header.Content.Desc>
                        <Header.Content.Doc>
                            <Header.Content.Desc.Title>Documents</Header.Content.Desc.Title>
                            <Header.Content.Doc.Box>
                                <Header.Content.Doc.Box.Item>
                                    <div className='flex2'>
                                        <Header.Content.Doc.Box.Item.Icon />
                                        <div className='info'>test_property.pdf</div>
                                    </div>
                                    <Header.Content.Desc.Section.Link dow href='#'>Download</Header.Content.Desc.Section.Link>
                                </Header.Content.Doc.Box.Item>
                                <Header.Content.Doc.Box.Item>
                                    <div className='flex2'>
                                        <Header.Content.Doc.Box.Item.Icon />
                                        <div className='info'>test_property.pdf</div>
                                    </div>
                                    <Header.Content.Desc.Section.Link dow href='#'>Download</Header.Content.Desc.Section.Link>
                                </Header.Content.Doc.Box.Item>
                                <Header.Content.Doc.Box.Item>
                                    <div className='flex2'>
                                        <Header.Content.Doc.Box.Item.Icon />
                                        <div className='info'>test_property.pdf</div>
                                    </div>
                                    <Header.Content.Desc.Section.Link dow href='#'>Download</Header.Content.Desc.Section.Link>
                                </Header.Content.Doc.Box.Item>
                            </Header.Content.Doc.Box>
                        </Header.Content.Doc>
                    </Header.Content>
                    <Header.OwnerHouse>
                        <Header.OwnerHouse.Box>
                            <Header.OwnerHouse.Box.Avatar src={Avatar} />
                            <Header.OwnerHouse.Box.Name>Darrel Steward</Header.OwnerHouse.Box.Name>
                            <Header.OwnerHouse.Box.Number>(123)456-7890</Header.OwnerHouse.Box.Number>
                        </Header.OwnerHouse.Box>
                        <Input placeholder='Name' width='100' />
                        <Input placeholder='Phone' width='100' />
                        <Input placeholder='Email' width='100' />
                        <Header.Content.Desc.Title message>Message</Header.Content.Desc.Title>
                        <Header.OwnerHouse.MessageBox>Hello, I am interested in [New Apartment]</Header.OwnerHouse.MessageBox>
                        <Header.OwnerHouse.SubmitBox>
                            <Header.OwnerHouse.SubmitBox.Input type='checkbox' />
                            <Header.OwnerHouse.SubmitBox.Text>By submitting this form I agree to Terms of Use</Header.OwnerHouse.SubmitBox.Text>
                        </Header.OwnerHouse.SubmitBox>
                        <Button width='232px' type='primary'>Send request</Button>
                    </Header.OwnerHouse>
                </Header>
                <Location>
                    <Header.Content.Desc.Title>Location</Header.Content.Desc.Title>
                    <Location.Content>
                        <Location.Content.Item>
                            <div className='flex3'>
                                <Header.Content.Desc.Title message>Address:</Header.Content.Desc.Title>
                                <Location.Content.Item.Text>{address}</Location.Content.Item.Text>
                            </div>
                            <div className='flex3'>
                                <Header.Content.Desc.Title message>State/County:</Header.Content.Desc.Title>
                                <Location.Content.Item.Text>{state}</Location.Content.Item.Text>
                            </div>
                        </Location.Content.Item>
                        <Location.Content.Item>
                            <div className='flex3'>
                                <Header.Content.Desc.Title message>City:</Header.Content.Desc.Title>
                                <Location.Content.Item.Text>{city}</Location.Content.Item.Text>
                            </div>
                            <div className='flex3'>
                                <Header.Content.Desc.Title message>Zip:</Header.Content.Desc.Title>
                                <Location.Content.Item.Text>{zipcode}</Location.Content.Item.Text>
                            </div>
                        </Location.Content.Item>
                        <Location.Content.Item>
                            <div className='flex3'>
                                <Header.Content.Desc.Title message>Area:</Header.Content.Desc.Title>
                                <Location.Content.Item.Text>{area}</Location.Content.Item.Text>
                            </div>
                            <div className='flex3'>
                                <Header.Content.Desc.Title message>Country:</Header.Content.Desc.Title>
                                <Location.Content.Item.Text>{country}</Location.Content.Item.Text>
                            </div>
                        </Location.Content.Item>
                    </Location.Content>
                    <Location.Img src={locationImg} />
                </Location>
                <PropDetails>
                    <Header.Content.Desc.Title>Property Details</Header.Content.Desc.Title>
                    <PropDetails.Content>
                        <PropDetails.Content.Item>
                            {renderDetails('Property ID', id)}
                            {renderDetails('Price', price)}
                            {renderDetails('Property Size', `${size} Sq Ft`)}
                            {renderDetails('Year Built', yearBuild)}
                        </PropDetails.Content.Item>
                        <PropDetails.Content.Item>
                            {renderDetails('Bedrooms', beds)}
                            {renderDetails('Bathrooms', baths)}
                            {renderDetails('Garage', garages)}
                            {renderDetails('Garage Size', `${garageSize} Sq Ft`)}
                        </PropDetails.Content.Item>
                        <PropDetails.Content.Item sb>
                            {renderDetails('Property Type', type)}
                            {renderDetails('Property Status', status)}
                        </PropDetails.Content.Item>
                    </PropDetails.Content>
                </PropDetails>
                <WriteReview>
                    <Header.Content.Desc.Title>Write a Review</Header.Content.Desc.Title>
                    <WriteReview.Content>
                        <div className='flex1'>
                            {reviewData1.map((value, index) => (
                                <WriteReview.Content.Item key={index}>
                                    <p className='info'>{value.name}</p>
                                    <div className='starBox'>{value.stars.map((star) => (
                                        <star.icon onClick={() => onStar(star.id)} key={star.id} style={{ color: star.star ? 'gold' : 'gray' }} />
                                    ))}</div>
                                </WriteReview.Content.Item>
                            ))}
                        </div>
                        <div className='flex1'>
                            {reviewData2.map((value, index) => (
                                <WriteReview.Content.Item key={index}>
                                    <p className='info'>{value.name}</p>
                                    <div className='starBox'>{value.stars.map((star) => (
                                        <star.icon onClick={() => onStar(star.id)} key={star.id} style={{ color: star.star ? 'gold' : 'gray' }} />
                                    ))}</div>
                                </WriteReview.Content.Item>
                            ))}
                        </div>
                    </WriteReview.Content>
                    <div className='flex2'>
                        <Input placeholder='Name'></Input>
                        <Input placeholder='Email'></Input>
                    </div>
                    <Input className='mb-20' width='100%' placeholder='Enter Your Message'></Input>
                    <Button width='250'>Send your review</Button>
                </WriteReview>
            </Container>
            <Footer />
        </>

    );
}

export default ProductView;

