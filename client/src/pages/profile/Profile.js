import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import './profile.css'
import post from '../../components/logo/jpg.jpeg'

function Profile() {
  return (
    <div className="profile">
    <div className="profileWrapper">
      <div className="profileTitle">
        <span className="profileTitleUpdate">Update Your Account</span>
        <button className="profileTitleDelete">Delete Account</button>
      </div>
      <form className="profileForm">
        <label>Profile Picture</label>
        <div className="profilePP">
          <img
            src={post}
            alt=""
          />
          <label htmlFor="fileInput">
            <i className="profilePPIcon far fa-user-circle"></i>{" "}
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            className="profilePPInput"
          />
        </div>
        <label>Username</label>
        <input type="text" placeholder="User Name" name="name" />
        <label>Email</label>
        <input type="email" placeholder="Email" name="email" />
        <label>Password</label>
        <input type="password" placeholder="Password" name="password" />
        <button className="profileSubmitButton" type="submit">
          Update
        </button>
      </form>
    </div>
    <SideBar />
  </div>
  )
}

export default Profile