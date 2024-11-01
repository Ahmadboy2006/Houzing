import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 130px 0 0 0;
    gap: 60px;
    border: 1px solid rgba(230, 233, 236, 1);
    box-shadow: 0px 10px 30px 0px rgba(13, 38, 59, 0.05);
`;

export const SignBox = styled.div`
    width: 580px;
    height: 536px;
    padding: 20px 20px 30px 20px;
    border: 1px solid rgba(230, 233, 236, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 10px 30px 0px rgba(13, 38, 59, 0.05);
    @media screen and (max-width: 930px){
        width: 359px;
    }
`;

SignBox.Title = styled.p`
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-align: ${({center}) => center ? 'center' : 'left'};
    color: rgba(13, 38, 59, 1);
`;

SignBox.Item = styled.input`
    width: 100%;
    padding: 10px 0;
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
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(230, 233, 236, 1);
`;

SignBox.Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

SignBox.Box.Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: rgba(105, 105, 105, 1);
`;