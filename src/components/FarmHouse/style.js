import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 571px;
    position: relative;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export const Blur = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.65);
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: center;
`;

Content.Title = styled.p`
    /* width: 566px; */
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.02em;
    text-align: center;
    color: white;
`;