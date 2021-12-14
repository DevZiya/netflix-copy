import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdCGOvb9QIy2-WxKvL34bkAIzTdbcSvGo",
  authDomain: "netflix-a43b7.firebaseapp.com",
  projectId: "netflix-a43b7",
  storageBucket: "netflix-a43b7.appspot.com",
  messagingSenderId: "1047328249492",
  appId: "1:1047328249492:web:56a497a555bb4bac448681",
  measurementId: "G-7P3XCNB3HN"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
