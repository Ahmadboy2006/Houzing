import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  }

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Profile;
