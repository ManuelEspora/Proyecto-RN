import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAbQPlorVNiXl6nzhYUWMi3kqfzadDv58c",
  authDomain: "proyecto-rn-d5016.firebaseapp.com",
  projectId: "proyecto-rn-d5016",
  storageBucket: "proyecto-rn-d5016.appspot.com",
  messagingSenderId: "964711170055",
  appId: "1:964711170055:web:36423d4bf1fb245e1eaaa2"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = firebase.firestore();

