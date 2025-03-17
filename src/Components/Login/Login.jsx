// import React, { useState } from "react";
// import {auth,googleProvider} from "../Authentication/Authentication"
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signInAnonymously } from "firebase/auth"
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Login.css"

// const LoginPage= () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegister, setIsRegister] = useState(false);

//   const handleAuth = async (e) => {
//     e.preventDefault();
//     try {
//       if (isRegister) {
//         await createUserWithEmailAndPassword(auth, email, password);
//         toast.success("Account created successfully!");
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//         toast.success("Logged in successfully!");
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       toast.success("Logged in with Google!");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleGuestLogin = async () => {
//     try {
//       await signInAnonymously(auth);
//       toast.success("Logged in as Guest!");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isRegister ? "Register" : "Login"}</h2>
//       <form onSubmit={handleAuth}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required pattern="^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$" title="Must contain at least 8 characters, one letter, and one number" />
//         <button type="submit">{isRegister ? "Sign Up" : "Login"}</button>
//       </form>
//       <button onClick={handleGoogleSignIn}>Continue with Google</button>
//       <button onClick={handleGuestLogin}>Login as Guest</button>
//       <p onClick={() => setIsRegister(!isRegister)}>{isRegister ? "Already have an account? Login" : "New user? Register"}</p>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// };

// export default LoginPage;
// import React, { useState } from "react";
// import { auth, googleProvider} from "../Authentication/Authentication"
// import { 
//   signInWithEmailAndPassword, 
//   createUserWithEmailAndPassword, 
//   signInWithPopup, 
//   signInAnonymously 
// } from "firebase/auth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Login.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegister, setIsRegister] = useState(false);
//   const [passwordError, setPasswordError] = useState("");

//   // Password Validation Function
//   const isValidPassword = (pwd) => {
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     return passwordRegex.test(pwd);
//   };

//   const handleAuth = async (e) => {
//     e.preventDefault();

//     if (!isValidPassword(password)) {
//       setPasswordError("Password must be at least 8 characters long and contain at least one letter and one number.");
//       return;
//     }

//     setPasswordError(""); // Clear error if valid

//     try {
//       if (isRegister) {
//         await createUserWithEmailAndPassword(auth, email, password);
//         toast.success("Account created successfully!");
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//         toast.success("Logged in successfully!");
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       toast.success("Logged in with Google!");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleGuestLogin = async () => {
//     try {
//       await signInAnonymously(auth);
//       toast.success("Logged in as Guest!");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isRegister ? "Register" : "Login"}</h2>
//       <form onSubmit={handleAuth}>
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         {passwordError && <p className="error-message">{passwordError}</p>}
//         <button type="submit">{isRegister ? "Sign Up" : "Login"}</button>
//       </form>
//       <button onClick={handleGoogleSignIn}>Continue with Google</button>
//       <button onClick={handleGuestLogin}>Login as Guest</button>
//       <p onClick={() => setIsRegister(!isRegister)}>
//         {isRegister ? "Already have an account? Login" : "New user? Register"}
//       </p>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { auth, googleProvider } from "../Authentication/Authentication";
import QRCodeGenerator from "../QRCodeGenerator/QRCodeGenerator";

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
  const navigate = useNavigate(); // Initialize navigation

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

    setPasswordError(""); // Clear error if valid

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully!");
      }
      setTimeout(() => navigate("/QRCodeGenerator"), 2000); // Navigate to dashboard after 2s
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in with Google!");
      setTimeout(() => navigate("/QRCodeGenerator"), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      toast.success("Logged in as Guest!");
      setTimeout(() => navigate("/QRCodeGenerator"), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Register" : "Login"}</h2>
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
      <button onClick={handleGoogleSignIn}>Continue with Google</button>
      <button onClick={handleGuestLogin}>Login as Guest</button>
      <p onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have an account? Login" : "New user? Register"}
      </p>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginPage;
