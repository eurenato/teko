// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-U1diP4O6fsezR6kYULjPMv7JWYfjmVY",
  authDomain: "tekoagua-app.firebaseapp.com",
  databaseURL: "https://tekoagua-app-default-rtdb.firebaseio.com",
  projectId: "tekoagua-app",
  storageBucket: "tekoagua-app.firebasestorage.app",
  messagingSenderId: "268329163771",
  appId: "1:268329163771:web:9309d646dd2d037589095e",
  measurementId: "G-67W66L6BZ0",
  databaseURL: "https://tekoagua-app-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { app, analytics, database };