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

var loader = document.createElement("div");
loader.className = "loader";
loader.id = "loader";
var rotator = document.createElement("div");
rotator.className = "rotator";

loader.style = `
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(45deg, #D3315A 0%, #7D5F91 100%);
z-index: 1000;
display: flex;
justify-content: center;
align-items: center;
`;
rotator.style = `
width: 40px;
height: 40px;
position: relative;
border: 3px solid #331d4280;
border-top: 3px solid #ffbccd68;
border-radius: 50%;
animation: spin 2s linear infinite;
`;

var style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`;
document.head.appendChild(style);

loader.appendChild(rotator);
document.body.appendChild(loader);

window.addEventListener("DOMContentLoaded", (event) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
    } else {
      console.log("user logged out");
    }
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000);
  });
});
