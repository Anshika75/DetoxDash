
const firebaseConfig = {
  apiKey: "AIzaSyBrk0jw3zgBe4-Xk-ztQNkIURIIMDIt2xo",
  authDomain: "detox-dash.firebaseapp.com",
  projectId: "detox-dash",
  storageBucket: "detox-dash.appspot.com",
  messagingSenderId: "47011619217",
  appId: "1:47011619217:web:f44d387b2c23c26d633a30",
  measurementId: "G-NSZ8F9C526",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
