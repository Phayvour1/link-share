// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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