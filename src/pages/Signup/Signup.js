import React, { useState } from "react";
import Nav from "../../components/Nav";
import "./auth.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (password != confirmPassword) {
      alert("Passwords do not math");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
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
          <h2 className="sec-title">Create an account</h2>
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
          <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className="btn-solid" type="submit">
            singup
          </button>
        </form>
        <Link to="/login">Already have an account, Login !</Link>
      </div>
    </div>
  );
}

export default Signup;
