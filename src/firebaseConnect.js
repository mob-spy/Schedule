import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyB7IB43eLPqhQO5LyTz72-nC26nXcNa48U",
    authDomain: "schedule-a3ea8.firebaseapp.com",
    databaseURL: "https://schedule-a3ea8.firebaseio.com",
    projectId: "schedule-a3ea8",
    storageBucket: "schedule-a3ea8.appspot.com",
    messagingSenderId: "484218826518"
  };
  // Initialize Firebase
  
  // firebase.analytics();
  firebase.initializeApp(firebaseConfig);
  export const dataNote = firebase.database().ref('DataForNote');
