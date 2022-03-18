// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCw53a4juiJN0X9jFfayZHDOdwYgvVISvM",
	authDomain: "ecoshop-2.firebaseapp.com",
	projectId: "ecoshop-2",
	storageBucket: "ecoshop-2.appspot.com",
	messagingSenderId: "103496485471",
	appId: "1:103496485471:web:aeb247500f2347e79169ea",
	measurementId: "G-2BB7ZSHRED",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
