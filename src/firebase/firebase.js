// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8Xkg366qIeJfDkKG3WReYlMAeEx0LJGE",
  authDomain: "movie-clone-5695a.firebaseapp.com",
  databaseURL: "https://movie-clone-5695a-default-rtdb.firebaseio.com",
  projectId: "movie-clone-5695a",
  storageBucket: "movie-clone-5695a.appspot.com",
  messagingSenderId: "98445861121",
  appId: "1:98445861121:web:d354825454cd9cdaf3fb00",
  measurementId: "G-YY92WXRBKL",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
