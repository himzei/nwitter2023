import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAF9gNoFnOawg6r3j4rpLCGPPf_vI_laLE",
  authDomain: "nwitter-reloaded-e1d28.firebaseapp.com",
  projectId: "nwitter-reloaded-e1d28",
  storageBucket: "nwitter-reloaded-e1d28.appspot.com",
  messagingSenderId: "1019209281042",
  appId: "1:1019209281042:web:ebb1df0c02da9dffcdb2cb",
  measurementId: "G-Q38F8LL91K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
