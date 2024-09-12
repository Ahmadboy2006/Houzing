import { styled } from 'styled-components';

export const Container = styled.div`
    width: 280px;
    height: 350px;
    position: relative;
    @media screen and (max-width: 700px) {
        width: 161px;
        height: 201px;
    }
`;

export const ImgCard = styled.img`
    width: inherit;
    height: inherit;
`;

export const Blur = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.65);
    box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.06);
    box-shadow: 0px 7px 46px 0px rgba(0, 0, 0, 0.06);
    box-shadow: 0px 20px 38px 0px rgba(0, 0, 0, 0.06);
    &:hover{
        background: white;
    }
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 0 auto;
`;

Content.Icon = styled.img`
    width: 60px;
    height: 60px;
`;

Content.TitleCard = styled.p`
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
`;