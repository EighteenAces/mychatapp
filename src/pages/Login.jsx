import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import ChikaLogo from "../img/chat-bubble.png";
import ShowPass from "../img/show.png";
import HidePass from "../img/hide.png";

const Login = () => {
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setError(true);
    }
  };

  const handleShowPassword = () =>{
    setShow(!show);
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img src={ChikaLogo} alt=""></img>
        <span className="logo">Chika Chat</span>
        <span className="title">Login</span>
        <form onSubmit={signIn}>
          <input type="email" placeholder="email" />
          <input type={show? "text": "password"} placeholder="password" />
          <img onClick={handleShowPassword} src={show? ShowPass : HidePass} alt=""/>
          <button>Sign in</button>
          {error && <span>Invalid! Register an account or check your input.</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
