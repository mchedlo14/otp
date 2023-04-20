// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2PJGZiFmgtRYAX_lofbHlGbzq3LE8VDw",
  authDomain: "otp-test-ee8fa.firebaseapp.com",
  projectId: "otp-test-ee8fa",
  storageBucket: "otp-test-ee8fa.appspot.com",
  messagingSenderId: "67521319440",
  appId: "1:67521319440:web:e56b7b040a5af62df23095",
  measurementId: "G-39Y7YWCXYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app) 