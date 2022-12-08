// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"

// const firebaseConfig = {
// apiKey: "AIzaSyCwv2ukttFzuRAKBeiKgeyyuE8BzF-QlYk",
// authDomain: "nasu-foods.firebaseapp.com",
// projectId: "nasu-foods",
// storageBucket: "nasu-foods.appspot.com",
// messagingSenderId: "755552201064",
// appId: "1:755552201064:web:f89f6f71a4fadd44e10edd"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const dbRef = ref(getDatabase());

// get(child(dbRef, `foods/${0}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// })