import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// let key = proccess.env.REACT_APP_FIREBASE_KEY
export const firebaseConfig = {

    apiKey: "AIzaSyCoiBpUYnTY0mUeXlAdiUTOBhulTIxzgI0",

    authDomain: "numerologist-ac279.firebaseapp.com",

    databaseURL: "https://numerologist-ac279-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "numerologist-ac279",

    storageBucket: "numerologist-ac279.appspot.com",

    messagingSenderId: "261602275042",

    appId: "1:261602275042:web:70e3a3fc876dd23360f8bb",

    measurementId: "G-C280E6DDET"

};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);