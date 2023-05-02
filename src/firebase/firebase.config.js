// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI49CzvQcZuMjrYINRV-AsKhPwVGizRws",
  authDomain: "madchef-client.firebaseapp.com",
  projectId: "madchef-client",
  storageBucket: "madchef-client.appspot.com",
  messagingSenderId: "251816003233",
  appId: "1:251816003233:web:68e72fd02a72a21576d2e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;