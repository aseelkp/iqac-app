import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfpL0fnD64a_fQYxpPzY4jyOc6Q7CIx8Q",
  authDomain: "iqac-app.firebaseapp.com",
  projectId: "iqac-app",
  storageBucket: "iqac-app.appspot.com",
  messagingSenderId: "316218478716",
  appId: "1:316218478716:web:2cf61963580935c562f9f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const auth = getAuth(app);