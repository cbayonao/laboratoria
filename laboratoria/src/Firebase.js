import firebase from 'firebase';
require("firebase/firestore");
// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

const firebaseConfig = { /*COPY THE ACTUAL CONFIG FILE FROM FIREBASE CONSOLE*/
  apiKey: "AIzaSyBWyBGLajruDyR9zbGKpaGrn_6s-TFp2dM",
  authDomain: "laboratoria-cbo.firebaseapp.com",
  databaseURL: "https://laboratoria-cbo.firebaseio.com",
  projectId: "laboratoria-cbo",
  storageBucket: "laboratoria-cbo.appspot.com",
  messagingSenderId: "525816358309",
  appId: "1:525816358309:web:6f1a7d2ec529ddfd5e344c",
  measurementId: "G-XZ271QYRJY"
};

firebase.initializeApp(firebaseConfig);
// const fire = firebase.initializeApp(config);

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore

export default firebase;
