import firebase from 'firebase';

const config = { /*COPY THE ACTUAL CONFIG FILE FROM FIREBASE CONSOLE*/
  apiKey: "AIzaSyBWyBGLajruDyR9zbGKpaGrn_6s-TFp2dM",
  authDomain: "laboratoria-cbo.firebaseapp.com",
  databaseURL: "https://laboratoria-cbo.firebaseio.com",
  projectId: "laboratoria-cbo",
  storageBucket: "laboratoria-cbo.appspot.com",
  messagingSenderId: "525816358309",
  appId: "1:525816358309:web:6f1a7d2ec529ddfd5e344c",
  measurementId: "G-XZ271QYRJY"
};

const fire = firebase.initializeApp(config);
export default fire;
