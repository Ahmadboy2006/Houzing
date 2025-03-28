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
      <br />
      <input type="file" onChange={(e) => uploadFile(e.target.files[0])} />
      <br />
      <br />
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Profile;
