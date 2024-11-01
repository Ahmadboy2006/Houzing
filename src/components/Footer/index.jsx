import React from 'react';
import { Container, FooterContent, FooterEnd, Contact, Discover, CategorySt, CategoryNd, Title, Text, Icons, SocialBox} from './style';

function Footer() {
    return (
        <Container>
            <FooterContent>
                <Contact>
                    <Title>Contact Us</Title>
                    <div className='flex'>
                        <Icons.Map />
                        <Text>329 Queensberry Street, North Melbourne VIC 3051, Australia.</Text>
                    </div>
                    <div className='flex'>
                        <Icons.Phone />
                        <Text>123 456 7890</Text>
                    </div>
                    <div className='flex'>
                        <Icons.Email />
                        <Text>support@houzing.com</Text>
                    </div>
                    <div className='flex-Social'>
                        <SocialBox><Icons.Facebook /></SocialBox>
                        <SocialBox><Icons.Twitter /></SocialBox>
                        <SocialBox><Icons.Instagram /></SocialBox>
                        <SocialBox><Icons.Linkedin /></SocialBox>
                    </div>
                </Contact>
                <Discover>
                    <Title>Discover</Title>
                    <Text>Chicago</Text>
                    <Text>Los Angeles</Text>
                    <Text>Miami</Text>
                    <Text>New York</Text>
                </Discover>
                <CategorySt>
                    <Title>Lists by Category</Title>
                    <Text>Apartments</Text>
                    <Text>Condos</Text>
                    <Text>Houses</Text>
                    <Text>Offices</Text>
                    <Text>Retail</Text>
                    <Text>Villas</Text>
                </CategorySt>
                <CategoryNd>
                    <Title>Lists by Category</Title>
                    <Text>About Us</Text>
                    <Text>Terms & Conditions</Text>
                    <Text>Support Center</Text>
                    <Text>Contact Us</Text>
                </CategoryNd>
            </FooterContent>
            <FooterEnd>
                <FooterEnd.LogoBox>
                    <FooterEnd.LogoBox.Logo />
                    <FooterEnd.LogoBox.Title>Houzing</FooterEnd.LogoBox.Title>
                </FooterEnd.LogoBox>
                <Text center=' '>Copyright © 2021 CreativeLayers. All Right Reserved.</Text>
            </FooterEnd>
        </Container>
    )
}

export default Footer;
