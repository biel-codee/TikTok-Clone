
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyA21solSlErMK-qmidJdzdYZMYBVMAIios",
  authDomain: "tiktok---clone-20a18.firebaseapp.com",
  projectId: "tiktok---clone-20a18",
  storageBucket: "tiktok---clone-20a18.appspot.com",
  messagingSenderId: "318557786090",
  appId: "1:318557786090:web:6fdd5422bac3b501c0ac93"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;