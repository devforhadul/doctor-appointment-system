
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGOU8Mo5K_lXy7JOTT8jxCgShwbnCCwgM",
    authDomain: "doctor-appointment-syste-20e97.firebaseapp.com",
    projectId: "doctor-appointment-syste-20e97",
    storageBucket: "doctor-appointment-syste-20e97.firebasestorage.app",
    messagingSenderId: "975319566023",
    appId: "1:975319566023:web:db5f73580504cd392260e2",
    databaseURL: "https://doctor-appointment-syste-20e97-default-rtdb.asia-southeast1.firebasedatabase.app"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);