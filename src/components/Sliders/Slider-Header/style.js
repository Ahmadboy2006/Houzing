import { styled } from "styled-components";
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg';

export const SliderImg = styled.img`
    width: 100%;
    height: 571px;

    @media screen and (max-width: 700px) {
        height: 712px;
    };
`;

export const Container = styled.div`
    position: relative;
    height: 571px;

    @media screen and (max-width: 700px) {
        height: 712px;
    };
`;

export const Arrow = styled(ArrowIcon)`
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    padding: 18px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: ${({ left }) => (left ? 'rotate(90deg)' : 'rotate(-90deg)')};
    left: ${({ left }) => left && '20px'};
    right: ${({ left }) => !left && '20px'};
    cursor: pointer;
    &:hover{
        background: rgba(255, 255, 255, 0.4);
    }
    @media screen and (max-width: 500px) {
        display: none;
    };
`;

export const Blur = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);

    @media screen and (max-width: 700px) {
        height: 712px;
    };
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media screen and (max-width: 700px) {
    height: 712px;
  }

  @media screen and (max-width: 600px) {
    align-content: space-around;
    border-radius: 3px;
  }
`;


Content.Title = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 44px;
    @media screen and (max-width: 800px) {
        font-size: 28px;
    };
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
`;

Content.Desc = styled.div`
    font-family: "Montserrat";
    font-style: normal;
    font-size: 16px;
    @media screen and (max-width: 800px) {
        font-size: 14px;
    };
    font-weight: 400;
    line-height: 24px;
    color: #ffffff;
    margin-top: 10px;
`;

Content.Price = styled.div`
    font-family: "Montserrat";
    font-style: normal;
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.02em;
`;