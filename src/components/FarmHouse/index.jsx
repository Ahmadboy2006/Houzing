import React from 'react';
import { Container, Img, Blur, Content } from './style.js';
import image from '../../assets/img/slider1-2.jpg';
import Button from '../Generic/Button/index.jsx';
import { Link } from 'react-router-dom';

function FarmHouse() {
    return (
        <Container>
            <Img src={image} />
            <Blur />
            <Content>
                <Content.Title>
                    Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
                </Content.Title>
                <Link to={'/Properties'}><Button width='180' type='primary'>Read more</Button></Link>
            </Content>
        </Container>
    )
}

export default FarmHouse
