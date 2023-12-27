import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";



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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function signUp(email, password, displayName) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      user
        .updateProfile({
          displayName: displayName,
        })
        .then(function () {
          // Update successful.
          db.collection("users")
            .doc(user.uid)
            .set({
              displayName: displayName,
              email: email,
              photoURL:
                "https://firebasestorage.googleapis.com/v0/b/quiz-app-1f4d0.appspot.com/o/avatars%2Fdefault.png?alt=media&token=9f8a2f5e-5e7a-4b7a-9d9e-7c4f7b0a5c7e",
            })
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        })
        .catch(function (error) {
          // An error happened.
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function signOut() {
  auth
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

function checkAuth() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      const uid = user.uid;
    } else {
      // User is signed out
      // ...
    }
  });
}

function getUid() {
  return auth.currentUser.uid;
}

function getDisplayName() {
  return auth.currentUser.displayName;
}

function getPhotoURL() {
  return auth.currentUser.photoURL;
}

function getEmail() {
  return auth.currentUser.email;
}
function getCurrentUser() {
  return auth.currentUser;
}

function getCollection(collectionName) {
  const querySnapshot = getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  return querySnapshot;
}
