import React, { useRef, useState } from 'react';
import { Container, RegBox } from './style';
import Button from '../Generic/Button';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {

  const [loginErr, setLoginErr] = useState(null);
  const [nameErr, setNameErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  const login = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const mail = useRef();
  const password1 = useRef();
  const password2 = useRef();

  const navigate = useNavigate();

  const getSignIn = () => {
    navigate('/signin');
  }

  const register = async (e) => {
    e.preventDefault();
    let valid = true;

    if (password1.current.value !== password2.current.value) {
      alert('Passwords do not match');
      valid = false;
    } else {
      if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,15}$/.test(password1.current.value)) {
        setPasswordErr(true);
        valid = false;
      } else {
        setPasswordErr(false);
      }
    }

    if (!/^[A-Za-z0-9]{5,15}$/.test(login.current.value)) {
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

    if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(mail.current.value)) {
      setEmailErr(true);
      valid = false;
    } else {
      setEmailErr(false);
    }

    if (valid) {
      const newData = {
        login: login.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: mail.current.value,
        password: password1.current.value
      };

      try {
        const response = await axios.post("https://house-market-liard.vercel.app/api/auth/register", newData);
        console.log("Ro'yxatdan o'tish muvaffaqiyatli:", response.data);
        localStorage.setItem("token", response?.data.accessToken)
        alert("Registration successful!");
        navigate("/myprops");
      } catch (error) {
        console.error("Xatolik:", error.response?.data || error.message);
        alert("Ro‘yxatdan o‘tishda xatolik yuz berdi!");
      }
    } else {
      alert('Please correct the errors before submitting.');
    }
  };

  return (
    <Container>
      <RegBox>
        <RegBox.Title>Register</RegBox.Title>
        <form onSubmit={register} className='form' >
          <RegBox.Item ref={login} placeholder='Login' />
          {loginErr && <p style={{ color: 'red' }}>Login must be 5-15 characters long and contain only letters and numbers</p>}

          <RegBox.Item type="text" ref={firstName} placeholder='First Name' />
          <RegBox.Item type="text" ref={lastName} placeholder='Last Name' />
          {nameErr && <p style={{ color: 'red' }}>First and last name should start with an uppercase letter and be 2-16 characters long</p>}

          <RegBox.Item type="email" ref={mail} placeholder='Email' />
          {emailErr && <p style={{ color: 'red' }}>Email should end with @gmail.com</p>}

          <RegBox.Item ref={password1} placeholder='Password' />
          <RegBox.Item ref={password2} placeholder='Re-enter password' />
          {passwordErr && <p style={{ color: 'red' }}>password must contain at least 1 uppercase letter and a number and must be between 7-15 characters</p>}

          <Button type='submit' width='100%'>Register</Button>
        </form>
        <RegBox.Title center>Do you already have an account?<br /><b>⬇</b></RegBox.Title>
        <Button onClick={getSignIn} type='primary' width='100%'>Sign In</Button>
      </RegBox>
      <Footer />
    </Container>
  )
}

export default Register;
