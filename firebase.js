// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9G147At_Tq3BRZY8zXYCRYACkyjWkEs4",
  authDomain: "cloud-firestore-a417f.firebaseapp.com",
  projectId: "cloud-firestore-a417f",
  storageBucket: "cloud-firestore-a417f.appspot.com",
  messagingSenderId: "945726316309",
  appId: "1:945726316309:web:ddbcef06e1e9d8541a131c",
  measurementId: "G-RJ27M3QLPH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
