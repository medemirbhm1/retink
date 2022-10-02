import React, { useState } from "react";
import Nav from "../../components/Nav";
import "./auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in
        console.log(userCredential);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  return (
    <div className="auth">
      <div className="container">
        <Nav />
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="sec-title">Connect your account</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn-solid" type="submit">
            login
          </button>
        </form>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
}

export default Login;
