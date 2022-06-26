import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8tJEzlnGM8gkwBtfQg_3XdhOiXjn4pxg",
  authDomain: "miniblog-b39d9.firebaseapp.com",
  projectId: "miniblog-b39d9",
  storageBucket: "miniblog-b39d9.appspot.com",
  messagingSenderId: "894996214574",
  appId: "1:894996214574:web:0899677bf542390cf480bf",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
