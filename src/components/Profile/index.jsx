import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'
import axios from 'axios';
import { FaUser } from "react-icons/fa6";

function Profile() {
  const navigate = useNavigate();
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [telephone, setTelephone] = useState("")
  const [email, setEmail] = useState("")
  const [last_name, setLast_Name] = useState("")
  const [password, setPassword] = useState("******")
  const [showSignOut, setShowSignOut] = useState(true);

  const toggleSignOut = () => {
    setShowSignOut(prev => !prev);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  }

  const getUser = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("https://houzing-api.up.railway.app/api/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setId(response.data.data.id)
      setName(response.data.data.first_name)
      setTelephone(response.data.data.login)
      setEmail(response.data.data.email)
      setLast_Name(response.data.data.last_name)
    } catch (error) {
      console.error("Foydalanuvchini olishda xatolik:", error);
    }
  };
  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("first_name", name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("login", telephone);

      const response = await axios.patch(`https://api.example.com/users/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("User updated:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="profile-container">
      <h2 className="title"><span className='user-icon'><FaUser /></span> Profile</h2>


      <div className="profile-content">
        <div className="form-section">
          <div className="input-group">
            <label>First name</label>
            <input type="text" onChange={(e) => {
              setName(e.target.value)
            }} value={name} placeholder="Enter first name" disabled={showSignOut} />
          </div>
          <div className="input-group">
            <label>Last name</label>
            <input onChange={(e) => {
              setLast_Name(e.target.value)
            }} type="text" value={last_name} placeholder="Last name" disabled={showSignOut} />
          </div>

          <div className="input-group">
            <label>Login name</label>
            <input onChange={(e) => {
              setTelephone(e.target.value)
            }} type="text" value={telephone} placeholder="Enter login name" disabled={showSignOut} />
          </div>
        </div>

        <div className="form-section">
          <div className="input-group">
            <label>Email address</label>
            <input type="email" onChange={(e) => {
              setEmail(e.target.value)
            }} value={email} placeholder="Email" disabled={showSignOut} />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" onChange={(e) => {
              setName(e.target.value)
            }} value={password} placeholder="Password" disabled />
          </div>


          <div className="input-group">
            <label>Infos</label>
            <div className="infos-btns">
              <button onClick={() => { setShowSignOut(!showSignOut) }} className="change-pass-btn">Update infos</button>
              {!showSignOut && <button onClick={handleUpdate} className='update-save'>Save</button>}
            </div>
          </div>
        </div>


      </div>

      <div className="save-btn-wrapper">
        <button onClick={signOut} className="signout-btn">Sign out</button>
        <Link to={'/myprops'}><button className="save-btn">My properties</button></Link>
      </div>
    </div>
  )
}

export default Profile;