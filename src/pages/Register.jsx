import React from "react";
import Add from "../img/addPhoto.png";


const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Jellie Chat App</span>
        <span className="title">Register</span>
        <form>
          <input required type="text" placeholder="enter your name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add a photo</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
