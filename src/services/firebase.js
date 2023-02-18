import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIWskJnaJwnssx_CMKOJ449zwQ5g2LnP8",
    authDomain: "react-34880-66130.firebaseapp.com",
    projectId: "react-34880-66130",
    storageBucket: "react-34880-66130.appspot.com",
    messagingSenderId: "288656447250",
    appId: "1:288656447250:web:c91dfb7448d979338fc5cb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);