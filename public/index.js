// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFg5TU1FepNmbGg842LgnU0SJiJ5WwvCk",
  authDomain: "topicly-org.firebaseapp.com",
  databaseURL: "https://topicly-org-default-rtdb.firebaseio.com",
  projectId: "topicly-org",
  storageBucket: "topicly-org.appspot.com",
  messagingSenderId: "368047186183",
  appId: "1:368047186183:web:db7d9e9dc36866882325a2",
  measurementId: "G-0R0CE0HQC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
