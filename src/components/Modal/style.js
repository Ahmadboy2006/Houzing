import { styled } from "styled-components";

export const ModalInp = styled.div`
  width: 1000px;
  height: auto;
  position: absolute;
  top: 100px;
  right: 130px;
  border-radius: 5px;
  background-color: #fff;
  z-index: 99999;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  @media screen and (max-width: 1300px){
    width: 920px;
  }
  @media screen and (max-width: 1200px){
    width: 850px;
  }
  @media screen and (max-width: 1110px){
    width: 760px;
  }
  @media screen and (max-width: 1020px){
    width: 700px;
  }
  @media screen and (max-width: 960px){
    width: 600px;
  }
  @media screen and (max-width: 860px){
    width: 500px;
  }
  @media screen and (max-width: 800px){
    top: 180px;
  }
  @media screen and (max-width: 770px){
    width: 60%;
  }
  @media screen and (max-width: 670px){
    width: 55%;
  }
  @media screen and (max-width: 600px){
    width: 63%;
    right: 85px;
  }
  @media screen and (max-width: 570px){
    width: 82%;
    right: 40px;
  }
  @media screen and (max-width: 430px){
    width: 87%;
    right: 20px;
  }
`;
export const InpCont1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px 30px 30px 30px;
  @media screen and (max-width: 860px){
    padding: 15px 15px 15px 15px;
  }
`;
export const InpCont2 = styled.div`
  width: 100%;
  height: 84px;
  border-radius: 0px 0px 5px 5px;
  background: rgba(246, 248, 249, 1);
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 20px;
  gap: 20px;
  @media screen and (max-width: 600px){
    
  }
`;
export const InpH1 = styled.h2`
  width: 100%;
  color: black;
`;
export const Input = styled.input`
  width: 220px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border: 1px solid rgba(230, 233, 236, 1);
  padding: 10px;
  &:focus{
    &::placeholder{
      color: #0413FC;
    };
  };
  @media screen and (max-width: 1300px){
    width: 200px;
  }
  @media screen and (max-width: 1200px){
    width: 180px;
  }
  @media screen and (max-width: 1110px){
    width: 160px;
  }
  @media screen and (max-width: 1020px){
    width: 140px;
  }
  @media screen and (max-width: 960px){
    width: 260px;
  }
  @media screen and (max-width: 860px){
    width: 220px;
  }
  @media screen and (max-width: 770px){
    width: 100%;
  }
`;