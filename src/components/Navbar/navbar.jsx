import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import LogoSite from '../../assets/icons/logo.svg'
import './navbar.css'
import { Container, Wrapper, Section, LinkSite, Bars, LoginIcon, LogoTitle } from "./styled";
import Button from "../Generic/Button/index";

function Navbar() {

  const [state, setState] = useState(true);

  const showNavbar = () => {
    setState(!state);
  }

  const register = ()=>{
    window.location.href = '/Register';
  }

  return (
    <Container>
      <Wrapper>
        <Section hideBars=' '>
          <Bars onClick={showNavbar}></Bars>
        </Section>
        <Section>
          <img className="logo" src={LogoSite} alt="" />
          <LogoTitle>Houzing</LogoTitle>
        </Section>
        <Section hideNavbar=' ' showNav={state}>
          <h1 onClick={showNavbar}>x</h1>
          <LinkSite to={"/"}>Home</LinkSite>
          <LinkSite to={"/Properties"}>Properties</LinkSite>
          <LinkSite to={"/Contacts"}>Contacts</LinkSite>
          <LinkSite to={"/favourites"}>Favourites</LinkSite>
        </Section>
        <Section >
          <LoginIcon></LoginIcon>
          <Button onClick={register} login=' ' type='dark'>Login</Button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
}

export default Navbar;