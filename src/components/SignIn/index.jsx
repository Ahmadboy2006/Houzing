import React, { useRef } from 'react';
import { Container, SignBox } from './style';
import Button from '../Generic/Button';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn() {

    const login = useRef();
    const password = useRef();

    const navigate = useNavigate()

    const getRegister = () => {
        navigate('/register');
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
    
        console.log("Login:", login.current?.value);
        console.log("Password:", password.current?.value);
    
        if (!login.current?.value || !password.current?.value) {
            alert("Login va parolni kiriting!");
            return;
        }
    
        try {
            const response = await axios.post("https://houzing-api.up.railway.app/api/auth/login", {
                login: login.current.value,
                password: password.current.value
            });
    
            const token = response.data?.accessToken;
    
            if (token) {
                localStorage.setItem("token", token);
                window.dispatchEvent(new Event("storage"));
                alert("Login muvaffaqiyatli!");
                navigate("/myprops");
            } else {
                alert("Token olinmadi, login yoki parol noto‘g‘ri!");
            }
        } catch (error) {
            console.error("Login xatosi:", error.response?.data || error.message);
            alert("Xatolik yuz berdi: " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <Container>
            <SignBox>
                <SignBox.Title>Sign in</SignBox.Title>
                <form onSubmit={handleSignIn} className='form'>
                    <SignBox.Item ref={login} placeholder='Login or Email' />
                    <SignBox.Item type="password" ref={password} placeholder='Password' />
                    <SignBox.Box>
                        <div className='flex3'>
                            <input className='Checkbox' type="checkbox" />
                            <SignBox.Box.Text>Remember me</SignBox.Box.Text>
                        </div>
                        <a href="#" className='underline'>Forgot</a>
                    </SignBox.Box>
                    <Button type='submit' width='100%'>Login</Button>
                </form>

                <SignBox.Title center >Don't have an account yet?<br /><b>⬇</b></SignBox.Title>
                <Button onClick={getRegister} type='primary' width='100%'>Register</Button>
            </SignBox>
            <Footer />
        </Container>
    )
}

export default SignIn;