import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as BarsIcon } from "../../assets/icons/bars.svg";
import { ReactComponent as LogIcon } from "../../assets/icons/login.svg";

export const Container = styled.div``;
export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--padding);
  background: var(--bgWrapper);
  /* color: white; */
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;
export const Section = styled.div`
  height: ${({showNav}) => showNav ? '100vh' : 'auto'};
  color: white;
  display: flex;
  align-items: center;
  display: ${({hideBars}) => hideBars ? 'none':'flex'};
  gap: ${({hideNavbar}) => hideNavbar ? '63px' : '7px'};

  @media screen and (max-width: 1080px){
    z-index: 999;
    width: ${({showNav}) => showNav && '115vw'};
    position: ${({showNav}) => showNav ? 'absolute':' '};
    flex-direction: ${({showNav}) => showNav && 'column'};
    background-color: ${({showNav}) => showNav && 'white'};
    display: ${({showNav1}) => showNav1 ? 'none':'flex'};
    top: ${({showNav}) => showNav ? '0px':' '};
    left: ${({showNav}) => showNav && '-50px'};
    justify-content: ${({showNav}) => showNav && 'center'};
    h1{
      position: ${({ showNav }) => (showNav && "absolute")};
      left: ${({ showNav }) => (showNav && "75px")};
      top: ${({ showNav }) => (showNav && "0px")};
      color: black;
      cursor: pointer;
      font-size: 25px;
      display: block !important;
    }
  }
  h1{
    display: none;
  }
`;

export const LinkSite = styled(Link)`
  color: white;
  @media screen and (max-width: 1080px){
    color: black; 
  }
`;

export const Bars = styled(BarsIcon)`
  display: none;
  @media screen and (max-width: 1080px) {
    display: block;
  }
  cursor: pointer;
`;

export const LoginIcon = styled(LogIcon)`
  display: none;
  width: 16px;
  height: 16px;
  @media screen and (max-width: 600px) {
    display: block;
  }
  cursor: pointer;
`;

export const LogoTitle = styled.p`
  font-weight: 600;
`;