import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'
import axios from 'axios';
import { FaUser } from "react-icons/fa6";

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState()
  const [name, setName] = useState("Ism")
  const [telephone, setTelephone] = useState("Tel raqam")
  const [email, setEmail] = useState("Email")
  const [showSignOut, setShowSignOut] = useState(false);

  const toggleSignOut = () => {
    setShowSignOut(prev => !prev);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  }

  function userPorfile(params) {
    const token = localStorage.getItem('token');
    console.log(token);

    if (token) {
      const response = axios.get('https://houzing-api.up.railway.app/api/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

    }
  }
  useEffect(() => {
    // userPorfile()
  }, [])

  return (
    <div className="profile-container">
      <h2 className="title"><span className='user-icon'><FaUser /></span> Profile</h2>

      <div className="profile-content">
        <div className="form-section">
          <div className="input-group">
            <label>First name</label>
            <input type="text" value={name} placeholder="Enter first name" disabled/>
          </div>

          <div className="input-group">
            <label>Phone number</label>
            <input type="text" value={telephone} placeholder="Enter phone number" disabled/>
          </div>

          {/* <div className="input-group">
            <label>Language</label>
            <select>
              <option>English</option>
              <option>Uzbek</option>
              <option>Russian</option>
            </select>
          </div> */}
        </div>

        <div className="form-section">
          <div className="input-group">
            <label>Email address</label>
            <input type="email" value={email} placeholder="Email" disabled />
          </div>

          <div className="input-group">
            <label>Password</label>
            <button className="change-pass-btn">Change password</button>
          </div>
        </div>

        
      </div>

      <div className="save-btn-wrapper">
        <button onClick={signOut} className="signout-btn">Sign out</button>
        <Link to={'/myprops'}><button className="save-btn">My products</button></Link>
      </div>
    </div>
  )
}

export default Profile;
