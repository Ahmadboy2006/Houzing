import { styled } from "styled-components";

export const Container = styled.div`
    width: 380px;
    height: 286px;
    position: relative;
    @media screen and (max-width: 500px){
        width: 343px;
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    height: 197px;
    background: white;
    box-shadow: 0px 10px 50px 0px rgba(13, 38, 59, 0.1);
    padding: 50px 50px 70px 50px;
    @media screen and (max-width: 500px) {
        padding: 50px 30px 70px 30px;
    }
`;

TextContainer.Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: rgba(105, 105, 105, 1);
`;

export const TitleContainer = styled.div`
    width: 100%;
    height: 89px;
    background: rgba(245, 247, 252, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 30px;
`;

TitleContainer.Item = styled.p`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: rgba(13, 38, 59, 1);
`;

TitleContainer.Title = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: rgba(105, 105, 105, 1);
`;

export const AvatarContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 175px;
    left: 171px;
    width: 42px;
    height: 42px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 10px 0px rgba(13, 38, 59, 0.2);
    border-radius: 50%;
`;

AvatarContainer.Item = styled.img`

`;