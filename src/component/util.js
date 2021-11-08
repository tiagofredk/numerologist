import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    
    authDomain: process.env.REACT_APP_authDomain,
    
    databaseURL: process.env.REACT_APP_dadtabaseURL,
    
    projectId: process.env.REACT_APP_projectId,
    
    storageBucket: process.env.REACT_APP_storageBucket,
    
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    
    appId: "1:261602275042:web:70e3a3fc876dd23360f8bb",
    // appId: process.env.REACT_APP_appId,

    measurementId: process.env.REACT_APP_measurementId

};

const app = initializeApp(firebaseConfig);

getAnalytics(app);