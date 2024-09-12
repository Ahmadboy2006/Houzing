import { styled } from "styled-components";
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg';

export const Container = styled.div`
    position: relative;
    height: 571px;
    margin-top: 90px;
`;

export const Arrow = styled(ArrowIcon)`
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    padding: 18px;
    background: ${({ arrowRec }) => arrowRec ? 'rgba(255, 255, 255, 1)' : 'transparent'};
    border: ${({ arrowRec }) => arrowRec ? '1px solid rgba(230, 233, 236, 1)' : 'none'};
    border-radius: 50%;
    transform: ${({ left }) => (left ? 'rotate(90deg)' : 'rotate(-90deg)')};
    left: ${({ left }) => left ? '20px' : 'auto'};
    right: ${({ left }) => left ? 'auto' : '20px'};
    box-shadow: ${({ arrowRec }) => arrowRec ? '0px 8px 15px 0px rgba(0, 0, 0, 0.06), 0px 7px 46px 0px rgba(0, 0, 0, 0.06), 0px 20px 38px 0px rgba(0, 0, 0, 0.06)' : 'none'};
    cursor: pointer;
    &:hover{
        background: ${({ arrowRec }) => arrowRec ? ' ' : 'rgba(255, 255, 255, 0.4)'};
    }
    @media screen and (max-width: 500px) {
        display: none;
    };
    path{
        fill: ${({arrowRec})=> arrowRec && 'black'};
    }
    
`;

export const TitleRec = styled.p`
    width: 95%;
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.02em;
    text-align: center;
    color: rgba(13, 38, 59, 1);
    margin: 0 auto 20px auto;
`;

export const MinTitleRec = styled.p`
    font-size: 16px;
    @media screen and (max-width: 640px){
        font-size: 14px;
    }
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-bottom: 30px;
    color: rgba(105, 105, 105, 1);
`;