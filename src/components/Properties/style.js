import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    margin-top: 50px;
    margin-bottom: ${({mb}) => mb && '100px'};
`;

export const Title = styled.p`
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.02em;
    text-align: center;
    color: rgba(13, 38, 59, 1);
`;

export const TitleMini = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: rgba(105, 105, 105, 1);
`;
