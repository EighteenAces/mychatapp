import React, { useState } from "react";
import Add from "../img/addPhoto.png";
import ChikaLogo from "../img/chat-bubble.png";
import ShowPass from "../img/show.png";
import HidePass from "../img/hide.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const signUp = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  const handleShowPassword = () =>{
    setShow(!show);
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img src={ChikaLogo} alt="" />
        <span className="logo">Chika Chat</span>
        <span className="title">Register</span>
        <form onSubmit={signUp}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type={show? "text": "password"} placeholder="password" />
          <img onClick={handleShowPassword} src={show? ShowPass : HidePass} alt=""/>
          <input required style={{ display: "none" }} type="file" id="file" />
          <div className="imageUpload">
            <label htmlFor="file">
              <img src={Add} alt="" />
              <p>Add a photo</p>
            </label>
          </div>
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading the image, please wait... :)"}
          {err && <span>Something went wrong. Please try again.</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
