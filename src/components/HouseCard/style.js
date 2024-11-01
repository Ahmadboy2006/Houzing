import styled from 'styled-components';
import { ReactComponent as bed } from '../../assets/icons/bed.svg';
import { ReactComponent as bath } from '../../assets/icons/bath.svg';
import { ReactComponent as garage } from '../../assets/icons/car.svg';
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';
import { ReactComponent as love } from '../../assets/icons/love.svg';
import { ReactComponent as resize } from '../../assets/icons/resize.svg';
import { ReactComponent as calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as share } from '../../assets/icons/share.svg';

export const Container = styled.div`
    width: 380px;
    height: auto;
    border: 1px solid rgba(230, 233, 236, 1);
    &:hover{
        box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.09);
        box-shadow: 0px 7px 46px 0px rgba(0, 0, 0, 0.09);
        box-shadow: 0px 20px 38px 0px rgba(0, 0, 0, 0.09);
    }
    @media screen and (max-width: 450px) {
        width: 343px;
    }
    
    margin-bottom: 20px;
`;

export const Img = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: ${({ footer }) => footer ? 'row' : 'column'};
    justify-content: ${({ footer }) => footer && 'space-between'};
    padding: 16px 20px;
    background: white;
`;

export const Details = styled.div`
    display: flex;
    width: ${({ homePage }) => homePage && '337px'};
    padding: 16px 0;
    justify-content: space-between;
    margin-top: 6px;
`;

Details.Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({ footer }) => !footer && 'center'};
    flex-direction: ${({ row }) => row ? 'row' : 'column'};
    gap: ${({row}) => row && '10px'};
`;

Details.Item.Line = styled.div`
    width: 70px;
    height: 1px;
    background: rgba(105, 105, 105, 1);
    position: absolute;
    top: 55%;
`;

export const Icons = styled.div``;
Icons.Bed = styled(bed)`
    path{
        fill: ${({ white }) => white && 'white'};
    }
`;
Icons.Bath = styled(bath)`
    path{
        fill: ${({ white }) => white && 'white'};
    }
`;
Icons.Garage = styled(garage)`
    path{
        fill: ${({ white }) => white && 'white'};
    }
`;
Icons.Ruler = styled(ruler)`
    path{
        fill: ${({ white }) => white && 'white'};
    }
`;
Icons.Resize = styled(resize)`
    width: 15px;
    height: 15px;
    &:active{
        transform: scale(1.5);
    }
`;
Icons.Love = styled(love)`
    width: 15px;
    height: 15px;
    &:active{
        transform: scale(0.9);
    }
`;
Icons.Calendar = styled(calendar)`
    width: 15px;
    height: 15px;
`;
Icons.Share = styled(share)`
    width: 15px;
    height: 15px;
    &:active{
        transform: scale(0.9);
    }
`;

export const Divider = styled.div`
    background: #e6e9ec;
    height: 1px;
    width: 100%;
`;

export const IconBg = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 60px;
    background-color: ${({clck}) => clck ? 'red' : 'rgba(246, 248, 249, 1)'};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all ease-in-out;
    cursor: pointer;
`; 