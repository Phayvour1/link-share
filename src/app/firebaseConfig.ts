<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
=======
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
>>>>>>> 04c5f29e05de7b8957b33481e968f1e7a3eb68cb

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyC6_GI1RWIbtE01MRjNA5W_l3hcRC6lc_s",
  authDomain: "link-sharing-92111.firebaseapp.com",
  projectId: "link-sharing-92111",
  storageBucket: "link-sharing-92111.appspot.com",
  messagingSenderId: "128932580025",
  appId: "1:128932580025:web:3e7f7d7602ad1a1a182968",
  measurementId: "G-WNE5KDQF3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
=======
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "hng-4-file-sharing.firebaseapp.com",
  projectId: "hng-4-file-sharing",
  storageBucket: "hng-4-file-sharing.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = getApps.length ? getApp():initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app)
const firestore = getFirestore(app)
export {app, auth, firestore, storage } 
>>>>>>> 04c5f29e05de7b8957b33481e968f1e7a3eb68cb
