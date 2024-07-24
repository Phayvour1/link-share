import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBTNYBkPaoZuy0e5680LHqiSM9fFoE0a7E",
  authDomain: "hng-4-file-sharing.firebaseapp.com",
  projectId: "hng-4-file-sharing",
  storageBucket: "hng-4-file-sharing.appspot.com",
  messagingSenderId: "1027930559368",
  appId: "1:1027930559368:web:ab1ad8eddb9188dd85a03d"
};

// Initialize Firebase
const app = getApps.length ? getApp():initializeApp(firebaseConfig);
const auth = getAuth()
export {app, auth } 