// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBDUpk_pN2TeFHdOWPLWgshX_xqEYTeFlE",
//   authDomain: "deliveryprime-bdd27.firebaseapp.com",
//   projectId: "deliveryprime-bdd27",
//   storageBucket: "deliveryprime-bdd27.appspot.com",
//   messagingSenderId: "294782217059",
//   appId: "1:294782217059:web:f32cf7f1417e759f880156",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// const authentication = getAuth(app);
// export default authentication;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDUpk_pN2TeFHdOWPLWgshX_xqEYTeFlE",
  authDomain: "deliveryprime-bdd27.firebaseapp.com",
  projectId: "deliveryprime-bdd27",
  storageBucket: "deliveryprime-bdd27.appspot.com",
  messagingSenderId: "294782217059",
  appId: "1:294782217059:web:f32cf7f1417e759f880156",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
