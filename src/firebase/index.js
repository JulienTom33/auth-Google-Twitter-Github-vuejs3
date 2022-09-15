import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNyDpd13dw84Nb7zry-9NpzQfDyEBAZgE",
  authDomain: "vue-auth--twitter-github.firebaseapp.com",
  projectId: "vue-auth--twitter-github",
  storageBucket: "vue-auth--twitter-github.appspot.com",
  messagingSenderId: "871353238099",
  appId: "1:871353238099:web:077f5de28a04dfcb237ca6",
  measurementId: "G-HPDQ4Y9WJH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp 