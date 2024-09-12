import { styled } from "styled-components";

export const Container = styled.div`
    width: 450px;
    height: 113px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 700px){
        width: 358px;
    }
    @media screen and (max-width: 550px){
        width: 325px;
        height: 91px;
    }
`;

export const ImgBox = styled.div`
    width: 113px;
    height: 113px;
    position: relative;
    @media screen and (max-width: 550px){
        width: 91px;
        height: 91px;
    }
`;

export const Image = styled.img`
    width: 113px;
    height: 113px;
    background-color: rgba(196, 196, 196, 1);
    border-radius: 3px;
    @media screen and (max-width: 550px){
        width: 91px;
        height: 91px;
    }
`;

export const Featured = styled.div`
    position: absolute;
    top: 5px;
    left: 5px;
    width: 73px;
    height: 23px;
    border-radius: 3px;
    background: rgba(0, 97, 223, 1);
    font-size: 10px;
    font-weight: 500;
    line-height: 12.7px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

export const Content = styled.div`
    max-width: 225px;
    height: 113px;
    padding: 3px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 550px){
        height: 91px;
    }
`;

export const ForSale = styled.div`
    width: 71px;
    height: 23px;
    background: rgba(13, 38, 59, 1);
    font-size: 10px;
    font-weight: 500;
    line-height: 12.7px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 3px;
    @media screen and (max-width: 700px){
        display: none;
    }
`;