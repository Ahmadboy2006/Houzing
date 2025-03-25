import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LogoSite from '../../assets/icons/logo.svg'
import './navbar.css'
import { Container, Wrapper, Section, LinkSite, Bars, LoginIcon, LogoTitle } from "./styled";
import Button from "../Generic/Button/index";

function Navbar() {

  const [state, setState] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  const showNavbar = () => {
    setState(!state);
    console.log(state);
  }

  const register = () => {
    const token = localStorage.getItem("token")
    if (token) {
      window.location.href = '/myprops';
    } else {
      window.location.href = '/Register';

    }
  }

  return (
    <Container>
      <Wrapper>
        <Section hideBars={true}>
          <Bars onClick={showNavbar}></Bars>
        </Section>
        <Link to={'/'}>
          <Section>
            <img className="logo" src={LogoSite} alt="" />
            <LogoTitle>Houzing</LogoTitle>
          </Section>
        </Link>
        <Section hideNavbar={true} showNav1={!state} showNav={state}>
          <h1 onClick={showNavbar}>x</h1>
          <LinkSite onClick={showNavbar} to={"/"}>Home</LinkSite>
          <LinkSite onClick={showNavbar} to={"/Properties"}>Properties</LinkSite>
          <LinkSite onClick={showNavbar} to={"/Contacts"}>Contacts</LinkSite>
          <LinkSite onClick={showNavbar} to={"/favourites"}>Favourites</LinkSite>
        </Section>
        <Section >
          <LoginIcon onClick={register}></LoginIcon>
          <Button className="login-btn" onClick={register} login={''} type='dark'>Login</Button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
}

export default Navbar;