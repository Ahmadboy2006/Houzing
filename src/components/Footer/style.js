import { styled } from "styled-components";
import { ReactComponent as map } from '../../assets/icons/map.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';
import { ReactComponent as email } from '../../assets/icons/email.svg';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as logoIcon } from '../../assets/icons/logo.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 417px;
    background: rgba(13, 38, 59, 1);
    margin-top: 20px;
`;

export const FooterContent = styled.div`
    width: 100%;
    min-height: 350px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 80px 20px 80px;
    @media screen and (max-width: 930px) {
        display: grid;
        row-gap: 50px;
        width: 80%;
        margin: 0 auto;
    }
    @media screen and (max-width: 750px) {
        padding: 40px 20px 20px 20px;
    }
    @media screen and (max-width: 670px) {
        padding: 40px 0px 20px 0px;
    }
    @media screen and (max-width: 630px) {
        width: 85%;
    }
    @media screen and (max-width: 560px) {
        width: 90%;
    }
    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`;

export const Contact = styled.div`
    width: 295px;
    height: 244px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-column: 1;
    grid-row: 1;
`;

export const Discover = styled.div`
    width: 85px;
    height: 196px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-column: 2;
    grid-row: 1;
`;

export const CategorySt  = styled.div`
    width: 142px;
    height: 276px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-column: 1;
    grid-row: 2;
`;

export const CategoryNd = styled.div`
    width: 142px;
    height: 196px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-column: 2;
    grid-row: 2;
`;

export const FooterEnd = styled.div`
    width: 100%;
    min-height: 67px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    @media screen and (max-width: 670px) {
        padding: 0 60px;
    }
    @media screen and (max-width: 630px) {
        padding: 0 40px;
    }
    @media screen and (max-width: 560px) {
        padding: 0 20px;
    }
    @media screen and (max-width: 530px) {
        flex-direction: column;
        gap: 20px;
        padding: 20px 50px;
    }
`;



export const Title = styled.p`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color: #fff;
`;

export const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align:${({center})=> center ? 'center' : 'left'};
    color: #fff;
`;

export const Icons = styled.div``;

Icons.Map = styled(map)`
    width: 31.2px;
    height: 18px;
`;
Icons.Phone = styled(phone)`
    width: 18px;
    height: 18px;
    path{
        fill: #fff;
    }
`;
Icons.Email = styled(email)`
    width: 18px;
    height: 18px;
`;
Icons.Facebook = styled(facebook)``;
Icons.Twitter = styled(twitter)``;
Icons.Instagram = styled(instagram)``;
Icons.Linkedin = styled(linkedin)``;

export const SocialBox = styled.div`
    width: 36px;
    height: 36px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;

        svg path {
            fill: rgba(255, 255, 255, 1);
        }
    }
`;

FooterEnd.LogoBox = styled.div`
    width: 110px;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

FooterEnd.LogoBox.Logo = styled(logoIcon)`
    width: 30.4px;
    height: 36px;
`;

FooterEnd.LogoBox.Title = styled.p`
    color: #fff;
    font-weight: 600;
`;