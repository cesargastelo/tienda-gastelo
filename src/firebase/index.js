import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeRWzEl2DWMpV8ypDL8lYLFD0MfoAgUAU",
    authDomain: "react-ecommerce-6e1cc.firebaseapp.com",
    projectId: "react-ecommerce-6e1cc",
    storageBucket: "react-ecommerce-6e1cc.appspot.com",
    messagingSenderId: "322519660453",
    appId: "1:322519660453:web:3caad03b5fb6186c919a4c"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);