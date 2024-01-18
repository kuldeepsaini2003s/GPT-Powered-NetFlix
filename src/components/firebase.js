import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCdqjFuo5fncbj-1DV7fdV259f1qq1765k",
  authDomain: "netflix-a1890.firebaseapp.com",
  projectId: "netflix-a1890",
  storageBucket: "netflix-a1890.appspot.com",
  messagingSenderId: "356458801873",
  appId: "1:356458801873:web:777f8e8f104bdc64e2b3f0",
  measurementId: "G-8BMMC767Y0",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, auth, analytics };
