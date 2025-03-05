import { styled } from "styled-components";
import { ReactComponent as download } from '../../assets/icons/download.svg'; 

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 100px var(--padding);
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const MainContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 20px 50px 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background: #fff;
    border: 1px solid rgba(230, 233, 236, 1);
    box-shadow: 0px 10px 30px 0px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
`;

export const MainTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-align: left;
    color: rgba(13, 38, 59, 1);
`;

export const MainContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
    row-gap: 30px;
    flex-wrap: wrap;
    @media screen and (max-width: 920px){
        justify-content: ${({add}) => add && 'center'};
    }
`;

export const Input = styled.input`
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom: 2px solid rgba(230, 233, 236, 1);
    padding: 5px;
    width: ${({width}) => width ? `${width}` : '45%'};
    &::placeholder{
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
        color: rgba(105, 105, 105, 1);
    }
    &:focus{
        outline: none;
        border-bottom-color: blue;
        &::placeholder{
            color: blue;
        }
    }
    @media screen and (max-width: 920px){
        width: ${({mini, view1}) => mini ? '160px' : view1 ? '45%' : '90%'};
        margin: ${({view}) => view ? '20px 0' : '0 auto'};
    }
    @media screen and (max-width: 470px){
        width: ${({mini, view1}) => mini ? '80%' : view1 ? '100%' : ''};
    }
    @media screen and (max-width: 470px){
        width: 100%;
    }
`;

export const Map = styled.img`
    width: 100%;
    height: 480px;
    @media screen and (max-width: 1100px){
        height: 400px;
    }
    @media screen and (max-width: 1000px){
        height: 350px;
    }
    @media screen and (max-width: 900px){
        height: 300px;
    }
    @media screen and (max-width: 800px){
        height: 250px;
    }
    @media screen and (max-width: 500px){
        height: 226px;
    }
`;

export const MediaContent = styled.div`
    display: flex;
    flex-direction: column !important;
    gap: 20px;

`;

MediaContent.Title = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: rgba(105, 105, 105, 1);
`;

MediaContent.ImgBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

MediaContent.ImgBox.Img = styled.img`
    width: 150px;
    height: 150px;
    background-color: rgba(196, 196, 196, 1);
    border-radius: 3px;
    &:hover{
        cursor: pointer;
    }
`;

MediaContent.DownloadIcon = styled(download)`
    width: 20px;
    height: 20px;
`;

export const AtsContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
`;

AtsContent.Item = styled.div`
    display: flex;
    gap: 10px;
`;

AtsContent.Item.Input = styled.input`
    width: 18px;
    height: 18px;
`;

AtsContent.Item.Title = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: rgba(105, 105, 105, 1);
`;