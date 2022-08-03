import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../auth/Firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="div">
      <h1 className="h1">Sign-in</h1>
      <label className="label">E-mail</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
        className="input"
        type="email"
        name="email"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
        className="input"
        type="password"
        name="password"
      />
      <br />
      <button onClick={signIn} className="button">
        Sign In
      </button>
      <button onClick={register}>Create Gmail</button>
    </div>
  );
}

export default Login;
