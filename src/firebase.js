// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5YNj2-ywftY9UAGagkKXK4nQkUuBIpuc",
  authDomain: "trackyourexpenses-e6701.firebaseapp.com",
  projectId: "trackyourexpenses-e6701",
  storageBucket: "trackyourexpenses-e6701.appspot.com",
  messagingSenderId: "522799629020",
  appId: "1:522799629020:web:7a5344cf6c5b62250aea19",
  databaseURL : "https://trackyourexpenses-e6701-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);