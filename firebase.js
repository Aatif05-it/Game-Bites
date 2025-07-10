// Use client-side SDK only
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBrC6R_M563xBIMSMTMsfjoXy9rwpk9QU",
  authDomain: "games-bites.firebaseapp.com",
  projectId: "games-bites",
  storageBucket: "games-bites.firebasestorage.app",
  messagingSenderId: "618684661993",
  appId: "1:618684661993:web:c0032dd7b1d6004329b078",
  measurementId: "G-D25222P01Y",
};
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
