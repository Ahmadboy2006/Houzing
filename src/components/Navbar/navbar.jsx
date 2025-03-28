import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LogoSite from '../../assets/icons/logo.svg'
import './navbar.css'
import { Container, Wrapper, Section, LinkSite, Bars, LoginIcon, LogoTitle } from "./styled";
import Button from "../Generic/Button/index";
import Profile from "../Profile";

function Navbar() {
  const navigate = useNavigate()
  const [state, setState] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const showNavbar = () => {
    setState(!state);
    console.log(state);
  };

  const signIn = () => {
    navigate("/signin")
  };

  const profile = () => {
    navigate("/profile")
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
          {!token ?
            <>
              <LoginIcon onClick={signIn}></LoginIcon>
              <Button onClick={signIn} loginBtn type='dark'>Login</Button>
            </>
            :
            <>
              <LoginIcon onClick={profile}></LoginIcon>
              <Button onClick={profile} loginBtn type='dark'>Profile</Button>
            </>
          }
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
}

export default Navbar;