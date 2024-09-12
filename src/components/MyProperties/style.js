import { styled } from "styled-components";
import { ReactComponent as edit } from '../../assets/icons/edit.svg';
import { ReactComponent as remove } from '../../assets/icons/delete.svg';
import { ReactComponent as save } from '../../assets/icons/save.svg';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

export const Content = styled.div`
    width: 1180px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 100px;
    @media screen and (max-width: 1250px){
        width: 1100px;
    }
    @media screen and (max-width: 1150px){
        width: 1000px;
    }
    @media screen and (max-width: 1100px){
        width: 900px;
    }
    @media screen and (max-width: 1000px){
        width: 850px;
    }
    @media screen and (max-width: 900px){
        width: 600px;
    }
    @media screen and (max-width: 650px){
        width: 500px;
    }
    @media screen and (max-width: 550px){
        width: 359px;
        height: 421px;
    }
`;

Content.Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

Content.Header.Title = styled.p`
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(13, 38, 59, 1);
`;

Content.Header.Search = styled.input`
    width: ${({main,min}) => main ? '200px' : min ? '90%' : '100%'};
    height: 26px;
    &::placeholder{
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
        color: rgba(105, 105, 105, 1);
    };
    &:focus{
        outline: none;
        border-bottom: 2px solid blue;
        &::placeholder{
            color: blue;
        }
    }
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid rgba(230, 233, 236, 1);
`;

Content.Main = styled.div`
    width: 100%;
    min-height: 487px;
    padding: 30px 30px 50px 30px;
    margin: 0 auto;
    border: 1px solid rgba(230, 233, 236, 1);
    box-shadow: 0px 10px 30px 0px rgba(13, 38, 59, 0.05);
    background: rgba(255, 255, 255, 1);
    @media screen and (max-width: 1000px){
        padding: 30px 15px 50px 15px;
    }
`;

Content.Main.Table = styled.table`
    width: 100%;
    height: 100%;
    table-layout: auto;
    @media screen and (max-width: 900px) {
    
  }
`;

export const Th = styled.th`
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-align: left;
    color: rgba(13, 38, 59, 1);
`;

export const ActionBox = styled.div`
    width: 73px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: ${({absolute}) => absolute && 'absolute'};
    background-color: #fff;
    bottom: 0;
    right: 0;
`;

export const Edit = styled(edit)`
    width: 16px;
    height: 16px;
    &:hover{
        cursor: pointer;
    }
    &:active{
        transform: scale(1.2);
    }
`;

export const Save = styled(save)`
    width: 20px;
    height: 20px;
    &:hover{
        cursor: pointer;
    }
    &:active{
        transform: scale(1.2);
    }
`;

export const DeleteBox = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 60px;
    background: rgba(246, 248, 249, 1);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Delete = styled(remove)`
    width: 16px;
    height: 16px;
    &:hover{
        cursor: pointer;
    }
    &:active{
        transform: scale(1.2);
    }
`;

