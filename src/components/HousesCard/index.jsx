import React, { useState } from 'react';
import { Container, ImgCard, Blur, Content } from './style.js';

function HousesCard({ data = {} }) {
    const {
        image,
        icon,
        title
    } = data;

    const [state, setState] = useState(true)

    const enterHover = () => {
        setState(false);
    };

    const leaveHover = () => {
        setState(true);
    };

    return (
        <Container onMouseLeave={leaveHover} onMouseOver={enterHover}>
            <ImgCard src={image} />
            {state && <Blur />}
            <Content>
                <Content.Icon src={icon} />
                <Content.TitleCard>{title}</Content.TitleCard>
            </Content>
        </Container>
    );
}

export default HousesCard;

