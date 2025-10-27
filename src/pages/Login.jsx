import React, { useState } from "react";
import "../assets/css/Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router";
import { auth } from "../../firebase";
import { Link } from "react-router";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
    );

    if (res.user){
        setIsLoading(false);
        setErrorMessage("");
        navigate("/shop")
        alert("Login successful!");

    }
    } catch (error) {
        setIsLoading(false);
        setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <>
            {!isLoading && <button type="submit">Login</button>}
            {isLoading && <p>Sending request...</p>}
            {errorMessage && (
                <h5 style={{color: "red"}}>{errorMessage}</h5>
            )}
        </>
        <p className="signup-text">
          Don’t have an account? <Link to="/sign-up">SignUp</Link>
        </p>
      </form>
    </div>
  );
}
