import { styled } from 'styled-components';
import { ReactComponent as download } from '../../assets/icons/download.svg';
import { ReactComponent as star } from '../../assets/icons/star.svg';

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 100px var(--padding);
`;

export const Header = styled.div`
    width: 100%;
    min-height: 950px;
    display: grid;
    gap: 30px;
`;

Header.ImgBox = styled.div`
    width: 100%;
    min-height: 400px;
    grid-column: 1 / span 4;
    grid-row: 1;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: repeat(2, auto);

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
`;

Header.ImgBox.MainImg = styled.img`
    width: 100%;
    height: 400px;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }
`;

Header.ImgBox.OtherImg = styled.img`
    width: 100%;
    height: 190px;
    object-fit: cover;
    grid-column: ${({ one, two, three, four }) => 
        one ? '3' : 
        two ? '3' : 
        three ? '4' : 
        four ? '4' : 'auto'};
    grid-row: ${({ one, two, three, four }) => 
        one ? '1' : 
        two ? '2' : 
        three ? '1' : 
        four ? '2' : 'auto'};

    @media screen and (max-width: 768px) {
        grid-column: ${({ one, two, three, four }) => 
            one ? '2' : 
            two ? '2' : 
            three ? '1' : 
            four ? '1' : 'auto'};
        grid-row: ${({ one, two, three, four }) => 
            one ? '1' : 
            two ? '2' : 
            three ? '2' : 
            four ? '3' : 'auto'};
    }
`;

Header.Content = styled.div`
    width: 74.6%;
    min-height: 530px;
    grid-column: 1 / span 4;
    grid-row: 2 / span 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(230, 233, 236, 1);
`;

Header.Content.Main = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
`;

Header.Content.Main.St = styled.div`
    width: 60.9%;
    min-height: 100px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

Header.Content.Main.Nd = styled.div`
    width: 23.5%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
`;

export const Detailss = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 0 4.5rem 0;
`;

Detailss.Item = styled.div`
    display: flex;
    gap: ${({gap}) => gap ? '25px' : '6px'};
    align-items: center;
`;

export const IconBox = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

Header.Content.Desc = styled.div`
    width: 100%;
    min-height: 240px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: space-between;
`;

Header.Content.Desc.Title = styled.p`
    font-size: ${({message}) => message ? '14px' : '16px'};
    font-weight: 600;
    line-height: 28px;
    text-align: left;
    color: rgba(13, 38, 59, 1);
`;

Header.Content.Desc.Section = styled.div`
    width: 100%;
    min-height: 200px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, #FFFFFF 100%);
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

Header.Content.Desc.Section.Link = styled.a`
    font-size: 14px;
    font-weight: ${({dow}) => dow ? '600' : '400'};
    line-height: 20px;
    text-align: left;
    color: rgba(0, 97, 223, 1);
    text-decoration: underline;
`;

Header.Content.Doc = styled.div`
    width: 95%;
    min-height: 64px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 50px;
`;

Header.Content.Doc.Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

Header.Content.Doc.Box.Item = styled.div`
    width: 253px;
    height: 20px;
    display: flex;
    justify-content: space-between;
`;

Header.Content.Doc.Box.Item.Icon = styled(download)``;

Header.OwnerHouse = styled.div`
    width: 300px;
    height: 476px;
    grid-column: 4;
    grid-row: 2 / span 3;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(230, 233, 236, 1);
    border-radius: 3px;
    background-color: white;
`;

Header.OwnerHouse.Box = styled.div`
    width: 85%;
    height: 56px;
    display: grid;
`;

Header.OwnerHouse.Box.Avatar = styled.img`
    width: 56px;
    height: 56px;
    box-shadow: 0px 0px 10px 0px rgba(13, 38, 59, 0.2);
    border-radius: 50%;
    grid-column: 1;
    grid-row: 1 / span 2;
`;

Header.OwnerHouse.Box.Name = styled.p`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color: rgba(13, 38, 59, 1);
    grid-column: 2 / span 5;
    grid-row: 1;
`;

Header.OwnerHouse.Box.Number = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: rgba(105, 105, 105, 1);
    grid-column: 2 / span 5;
    grid-row: 2;
`;

Header.OwnerHouse.MessageBox = styled.div`
    width: 100%;
    height: 40px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(13, 38, 59, 1);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: rgba(13, 38, 59, 1);
`;

Header.OwnerHouse.SubmitBox = styled.div`
    width: 97%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 10px;
`;

Header.OwnerHouse.SubmitBox.Input = styled.input`
    width: 18px;
    height: 18px;
    border: 2px solid rgba(230, 233, 236, 1);
    margin-top: 5px;
`;

Header.OwnerHouse.SubmitBox.Text = styled.div`
    width: 206px;
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: rgba(105, 105, 105, 1);
`;

export const Location = styled.div`
    width: 74.6%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
    padding-bottom: 50px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(230, 233, 236, 1);
`;

Location.Content = styled.div`
    width: 100%;
    min-height: 64px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

Location.Content.Item = styled.div`
    min-height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

Location.Content.Item.Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: rgba(105, 105, 105, 1);
`;

Location.Img = styled.img`
    width: 100%;
    height: 416px;
`;

export const PropDetails = styled.div`
    width: 74.6%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(230, 233, 236, 1);
`;

PropDetails.Content = styled.div`
    width: 100%;
    min-height: 152px;
    display: flex;
    justify-content: space-between;
`;

PropDetails.Content.Item = styled.div`
    height: ${({two}) => two ? '64px' : '152px'};
    display: flex;
    flex-direction: column;
    justify-content: ${({sb}) => sb ? '' : 'space-between'};
    gap: ${({sb}) => sb && '25px'};
`;

export const WriteReview = styled.div`
    width: 74.6%;
    height: auto;
    margin-top: 50px;
`;

WriteReview.Content = styled.div`
    width: 80%;
    height: auto;
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
`;

WriteReview.Content.Item = styled.div`
    width: 270px;
    height: 20px;
    display: flex;
    justify-content: space-between;
`;

export const Star = styled(star)`
    width: 10px;
    height: 12px;
    cursor: pointer;
`;

