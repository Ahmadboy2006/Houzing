import React, { useRef } from 'react';
import { Container, SignBox } from './style';
import Button from '../Generic/Button';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const login = useRef();
    const password = useRef();

    const navigate = useNavigate()

    const getRegister = ()=>{
        navigate('/register');
    }

    const signIn = ()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if (user.login === login.current.value && user.password === password.current.value) {
            alert('Sign In succesfull');
        } else if(login.current.value === '' && password.current.value === ''){
            alert('Login or Password not entered!')
        } else {
            alert('Login or Password is incorrect!');
        }
    }

    return (
        <Container>
            <SignBox>
                <SignBox.Title>Sign in</SignBox.Title>
                <SignBox.Item ref={login} placeholder='Ali Tufa...' />
                <SignBox.Item ref={password} placeholder='Password' />
                <SignBox.Box>
                    <div className='flex1'>
                        <input className='Checkbox' type="checkbox" />
                        <SignBox.Box.Text>Remember me</SignBox.Box.Text>
                    </div>
                    <a className='forgot' href="#">Forgot</a>
                </SignBox.Box>
                <Button onClick={signIn} type='primary' width='100%'>Login</Button>
                <SignBox.Title center >Don't have an account yet?<br /><b>⬇</b></SignBox.Title>
                <Button onClick={getRegister} type='primary' width='100%'>Register</Button>
            </SignBox>
            <Footer />
        </Container>
    )
}

export default SignIn;