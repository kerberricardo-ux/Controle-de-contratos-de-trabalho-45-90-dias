import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWbDaYGp90MoU_32FzAA3rr72e0KDzRCU",
  authDomain: "controle-de-contratos-18a2a.firebaseapp.com",
  projectId: "controle-de-contratos-18a2a",
  storageBucket: "controle-de-contratos-18a2a.firebasestorage.app",
  messagingSenderId: "691364375773",
  appId: "1:691364375773:web:b609586d379b925b153f34",
  measurementId: "G-HM582C321M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
