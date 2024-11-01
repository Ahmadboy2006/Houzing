import React, { useState, useEffect } from 'react';
import { TitleRec, MinTitleRec } from '../Sliders/Slider-Rec/style.js';
import { Container, ChooseBox, Icons, ChooseTitle, ChooseMinTitle } from './style.js';

function WhyChooseUs() {
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
            <TitleRec>Why Choose Us?</TitleRec>
            <MinTitleRec>{width < 580 ? '112 Glenwood Ave Hyde Park, Boston, MA' : 'Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.'}</MinTitleRec>
            <ChooseBox>
                <ChooseBox.Item>
                    <Icons.Message />
                    <ChooseBox.Item.Box>
                        <ChooseTitle>Trusted By Thousands</ChooseTitle>
                        <ChooseMinTitle>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</ChooseMinTitle>
                    </ChooseBox.Item.Box>
                </ChooseBox.Item>
                <ChooseBox.Item>
                    <Icons.Home />
                    <ChooseBox.Item.Box>
                        <ChooseTitle>Wide Range Of Properties</ChooseTitle>
                        <ChooseMinTitle>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</ChooseMinTitle>
                    </ChooseBox.Item.Box>
                </ChooseBox.Item>
                <ChooseBox.Item>
                    <Icons.Phone />
                    <ChooseBox.Item.Box>
                        <ChooseTitle>Financing Made Easy</ChooseTitle>
                        <ChooseMinTitle>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</ChooseMinTitle>
                    </ChooseBox.Item.Box>
                </ChooseBox.Item>
                <ChooseBox.Item>
                    <Icons.Map />
                    <ChooseBox.Item.Box>
                        <ChooseTitle>See Neighborhoods</ChooseTitle>
                        <ChooseMinTitle>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</ChooseMinTitle>
                    </ChooseBox.Item.Box>
                </ChooseBox.Item>
            </ChooseBox>
        </Container>
    );
}

export default WhyChooseUs;

