import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAH-TRefIWU87xv7l6nE2DFVmJA7Uz2Oco",
    authDomain: "letmeask-1f4b3.firebaseapp.com",
    databaseURL: "https://letmeask-1f4b3-default-rtdb.firebaseio.com",
    projectId: "letmeask-1f4b3",
    storageBucket: "letmeask-1f4b3.appspot.com",
    messagingSenderId: "190527693418",
    appId: "1:190527693418:web:2c9ae967af26d4847d6013"
  };

  firebase.initializeApp(firebaseConfig);

  //export const auth = firebase.auth();
  //export const database = firebase.database();
