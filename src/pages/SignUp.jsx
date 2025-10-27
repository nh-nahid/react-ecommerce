import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Navigate } from "react-router";
import "../assets/css/Signup.css";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  }); 

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        await createUserWithEmailAndPassword(
            auth, 
            user.email,
            user.password
        );
        await setDoc(doc(db, "users", auth.currentUser.uid), {
            name: user.name,
            email: user.email,
            password: user.password,
            role: "user",
        })
        setIsLoading(false);
        alert("Signup successful!");
        setErrorMessage("")
        navigate("/login")

    } catch (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

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
            {!isLoading && <button type="submit">Sign Up</button>}
            {isLoading && <p>Creating New User</p>}
            {errorMessage && (
                <p style={{color: "red"}}>{errorMessage}</p>
            )}
        </>
        <p className="login-text">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
}
