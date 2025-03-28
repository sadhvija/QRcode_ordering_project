import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../Authentication/Authentication";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInAnonymously
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  // Password Validation Function
  const isValidPassword = (pwd) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(pwd);
  };

  const handleAuth = async (e) => {
    e.preventDefault();

    if (!isValidPassword(password)) {
      setPasswordError("Password must be at least 8 characters long and contain at least one letter and one number.");
      return;
    }

    setPasswordError("");

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully!");
      }
      setTimeout(() => navigate("/QRCodeGenerator"), 2000);
    } catch (error) {
      console.error("Authentication Error:", error.code, error.message);
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in with Google!");
      setTimeout(() => navigate("/QRCodeGenerator"), 2000);
    } catch (error) {
      console.error("Google Sign-In Error:", error.code, error.message);
      toast.error(error.message);
    }
  };

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      toast.success("Logged in as Guest!", {
        className: "custom-toast-success",
      });
      setTimeout(() => navigate("/QRCodeGenerator"), 2000);
    } catch (error) {
      console.error("Guest Login Error:", error.code, error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Create Account" : "Welcome Back"}</h2>
      
      <div className="auth-card">
        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
          <button type="submit">{isRegister ? "Sign Up" : "Login"}</button>
        </form>
      </div>
      
      <div className="divider">or</div>
      
      <button onClick={handleGoogleSignIn}>Continue with Google</button>
      <button onClick={handleGuestLogin}>Login as Guest</button>
      
      <p onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have an account? Login" : "New user? Create account"}
      </p>
      
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginPage;