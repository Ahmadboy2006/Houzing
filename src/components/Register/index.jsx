import React, { useRef, useState } from 'react';
import { Container, RegBox } from './style';
import Button from '../Generic/Button';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [loginErr, setLoginErr] = useState(null);
  const [nameErr, setNameErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  const login = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password1 = useRef();
  const password2 = useRef();

  const navigate = useNavigate();

  const getSignIn = () => {
    navigate('/signin');
  }

  const register = () => {
    let valid = true;
   
    if (password1.current.value !== password2.current.value) {
      alert('Passwords do not match');
      valid = false;
    } else{
      if (!/^(?=.*\d)[A-Za-z\d]{7,15}$/.test(password1.current.value)) {
        setPasswordErr(true);
        valid = false;
      } else{
        setPasswordErr(false);
      }
    }
   
    if (!/^(?=.*[A-Z])[A-Za-z0-9]{5,15}$/.test(login.current.value)) {
      setLoginErr(true);
      valid = false;
    } else {
      setLoginErr(false);
    }
   
    if (!/^[A-Z][a-z]{1,15}$/.test(firstName.current.value) || !/^[A-Z][a-z]{1,15}$/.test(lastName.current.value)) {
      setNameErr(true);
      valid = false;
    } else {
      setNameErr(false);
    }
   
    if (!email.current.value.includes('@gmail.com')) {
      setEmailErr(true);
      valid = false;
    } else {
      setEmailErr(false);
    }
   
    if (valid) {
      const userData = {
        login: login.current.value,
        firstname: firstName.current.value,
        lastname: lastName.current.value,
        email: email.current.value,
        password: password1.current.value,
      };
      localStorage.setItem('user', JSON.stringify(userData));
      alert('Registration successful!');
      navigate('/signin');
    } else {
      alert('Please correct the errors before submitting.');
    }
   }   

  return (
    <Container>
      <RegBox>
        <RegBox.Title>Register</RegBox.Title>
        <RegBox.Item ref={login} placeholder='Login' />
        {loginErr && <p style={{ color: 'red' }}>Login must contain at least one uppercase letter and be 5-15 characters long</p>}

        <RegBox.Item ref={firstName} placeholder='First Name' />
        <RegBox.Item ref={lastName} placeholder='Last Name' />
        {nameErr && <p style={{ color: 'red' }}>First and last name should start with an uppercase letter and be 2-16 characters long</p>}

        <RegBox.Item ref={email} placeholder='Email' />
        {emailErr && <p style={{ color: 'red' }}>Email should end with @gmail.com</p>}

        <RegBox.Item ref={password1} placeholder='Password' />
        <RegBox.Item ref={password2} placeholder='Re-enter password' />
        {passwordErr && <p style={{ color: 'red' }}>password must contain at least 1 uppercase letter and a number and must be between 7-15 characters</p>}

        <Button onClick={register} type='primary' width='100%'>Register</Button>
        <RegBox.Title center>Do you already have an account?<br /><b>⬇</b></RegBox.Title>
        <Button onClick={getSignIn} type='primary' width='100%'>Sign In</Button>
      </RegBox>
      <Footer />
    </Container>
  )
}

export default Register;
