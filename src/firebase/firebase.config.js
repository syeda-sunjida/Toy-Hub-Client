// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF9Wn4hVAGOHqYWhgJ8fwqR2wGhtZWmXM",
  authDomain: "toy-hub-ada8c.firebaseapp.com",
  projectId: "toy-hub-ada8c",
  storageBucket: "toy-hub-ada8c.appspot.com",
  messagingSenderId: "389032075960",
  appId: "1:389032075960:web:03123ccc325e35845dca4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;