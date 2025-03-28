import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAiQB_jvj3oA7ev_7GBKYCL2H9ZWXTkWHY",
    authDomain: "smart-dine-ad9e9.firebaseapp.com",
    projectId: "smart-dine-ad9e9",
    storageBucket: "smart-dine-ad9e9.firebasestorage.app",
    messagingSenderId: "805925211126",
    appId: "1:805925211126:web:d588bb3227190ea38455d7"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign Up Successful");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <form onSubmit={handleSignUp} className="flex flex-col gap-2">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-2" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Sign Up</button>
      </form>
      <Link to="/login" className="text-blue-600 mt-2">Already have an account? Login</Link>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-2" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
      </form>
      <Link to="/signup" className="text-blue-600 mt-2">Don't have an account? Sign Up</Link>
    </div>
  );
};

const Signup_Login = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1 className="text-center">Welcome to the App</h1>} />
      </Routes>
    </Router>
  );
};

export default Signup_Login;
