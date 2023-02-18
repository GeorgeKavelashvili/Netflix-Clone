import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCBoGFSkhsBBSBmA8DeDovmhrpKkSB75Ro",
  authDomain: "netflix-9c306.firebaseapp.com",
  projectId: "netflix-9c306",
  storageBucket: "netflix-9c306.appspot.com",
  messagingSenderId: "30482003700",
  appId: "1:30482003700:web:f6054b354763cadbe310a1",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
