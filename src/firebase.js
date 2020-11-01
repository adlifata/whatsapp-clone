import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFJAvmD10hDfQ2ojGPNsm6AJ5sgmZCoMg",
  authDomain: "whatsapp-clone-48088.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-48088.firebaseio.com",
  projectId: "whatsapp-clone-48088",
  storageBucket: "whatsapp-clone-48088.appspot.com",
  messagingSenderId: "70525472489",
  appId: "1:70525472489:web:e3a33459337cd793c8aa78",
  measurementId: "G-PS78HJHDQ6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
