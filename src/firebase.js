import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoK5uMhT8HMwptLfRilaNI4ndO-wKE1mU",
  authDomain: "tinder-clone123.firebaseapp.com",
  projectId: "tinder-clone123",
  storageBucket: "tinder-clone123.appspot.com",
  messagingSenderId: "1023485506733",
  appId: "1:1023485506733:web:3735d4145b3fdaad278224",
  measurementId: "G-K36LQV4QZ3"
};

initializeApp(firebaseConfig);
const database = getFirestore();

export default database;