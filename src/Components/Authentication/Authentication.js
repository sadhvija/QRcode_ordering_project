import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiQB_jvj3oA7ev_7GBKYCL2H9ZWXTkWHY",
  authDomain: "smart-dine-ad9e9.firebaseapp.com",
  projectId: "smart-dine-ad9e9",
  storageBucket: "smart-dine-ad9e9.firebasestorage.app",
  messagingSenderId: "805925211126",
  appId: "1:805925211126:web:d588bb3227190ea38455d7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account", 
});

export { auth, googleProvider };
