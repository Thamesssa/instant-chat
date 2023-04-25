// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBoI9jn6quVc8Bcd-e6VLFzDZUmcwgZls",
  authDomain: "instant-chat-14219.firebaseapp.com",
  projectId: "instant-chat-14219",
  storageBucket: "instant-chat-14219.appspot.com",
  messagingSenderId: "881571862184",
  appId: "1:881571862184:web:9c3202051dc265c54a549d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)