import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as BarsIcon } from "../../assets/icons/bars.svg";
import { ReactComponent as LogIcon } from "../../assets/icons/login.svg";

const breakpoints = {
  mobile: '375px',
  tablet: '1440px',
  desktop: '1920px',
};

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
  color: white;
  display: flex;
  align-items: center;
  display: ${({hideBars}) => hideBars ? 'none':'flex'};
  gap: ${({hideNavbar}) => hideNavbar ? '63px' : '7px'};

  @media screen and (max-width: 1080px) {
    display: ${({hideNavbar}) => hideNavbar ? 'none':'flex'};
  }
  @media screen and (max-width: 1080px){
    z-index: 999;
    width: ${({hideNavbar}) => hideNavbar && '115%'};
    height: ${({hideNavbar}) => hideNavbar && '710px'};
    position: ${({hideNavbar}) => hideNavbar ? 'absolute':' '};
    flex-direction: ${({hideNavbar}) => hideNavbar && 'column'};
    background-color: ${({hideNavbar}) => hideNavbar && 'white'};
    display: ${({hideNavbar, showNav}) => hideNavbar && showNav ? 'none':'flex'};
    top: ${({hideNavbar}) => hideNavbar ? '0px':' '};
    left: ${({hideNavbar}) => hideNavbar && '-50px'};
    justify-content: ${({hideNavbar}) => hideNavbar && 'center'};
    h1{
      position: ${({ hideNavbar }) => (hideNavbar && "absolute")};
      left: ${({ hideNavbar }) => (hideNavbar && "75px")};
      top: ${({ hideNavbar }) => (hideNavbar && "0px")};
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