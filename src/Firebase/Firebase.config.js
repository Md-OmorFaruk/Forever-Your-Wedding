// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRBcfE0kFBrIU6yCicr5w-DTJMtEpQtcQ",
  authDomain: "wedding-event-planner-697d0.firebaseapp.com",
  projectId: "wedding-event-planner-697d0",
  storageBucket: "wedding-event-planner-697d0.appspot.com",
  messagingSenderId: "993835398715",
  appId: "1:993835398715:web:ae0d55f47663e0f0470e1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;