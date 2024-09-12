import { styled } from 'styled-components';
import { ReactComponent as home } from '../../assets/icons/cardHouse.svg';
import { ReactComponent as message } from '../../assets/icons/cardMassage.svg';
import { ReactComponent as phone } from '../../assets/icons/cardPhone.svg';
import { ReactComponent as map } from '../../assets/icons/cardMaps.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 434px;
    max-height: 1110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(245, 247, 252, 1);
    margin-top: 80px;
    padding: 50px;
    @media screen and (max-width: 400px){
        padding: 40px;
    }
`;

export const ChooseBox = styled.div`
    width: 80%;
    min-height: 230px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 1350px){
        width: 59%;
        justify-content: center;
        gap: 50px;
    }
    @media screen and (max-width: 1040px){
        width: 70%;
        gap: 10px;
    }
    @media screen and (max-width: 830px){
        width: 100%;
    }
`;

ChooseBox.Item = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

ChooseBox.Item.Box = styled.div`
    height: 160px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Icons = styled.div``;

Icons.Message = styled(message)`
    path{
        fill: rgba(0, 97, 223, 1);
    }
`;
Icons.Home = styled(home)``;
Icons.Phone = styled(phone)``;
Icons.Map = styled(map)``;

export const ChooseTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-align: center;
    color: rgba(13, 38, 59, 1);
`;

export const ChooseMinTitle = styled.p`
    width: 220px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: rgba(105, 105, 105, 1);
`;