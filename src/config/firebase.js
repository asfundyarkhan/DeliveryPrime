// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBDUpk_pN2TeFHdOWPLWgshX_xqEYTeFlE",
//   authDomain: "deliveryprime-bdd27.firebaseapp.com",
//   projectId: "deliveryprime-bdd27",
//   storageBucket: "deliveryprime-bdd27.appspot.com",
//   messagingSenderId: "294782217059",
//   appId: "1:294782217059:web:f32cf7f1417e759f880156",
// };
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDek_RhXnI30pXadnmyyiQ2AHZO5unI9Kg",
  authDomain: "deliveryprime130-93e9f.firebaseapp.com",
  projectId: "deliveryprime130-93e9f",
  storageBucket: "deliveryprime130-93e9f.appspot.com",
  messagingSenderId: "382337377340",
  appId: "1:382337377340:web:b8746b8eb463e456d80f39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "User");
export default colRef;
