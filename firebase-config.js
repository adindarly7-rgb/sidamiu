// Firebase SIDAMIU

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyC6dH3YpTABKNZP1_lpN5hVSVyE5pmrbks",

authDomain: "sidamiu-14aa3.firebaseapp.com",

projectId: "sidamiu-14aa3",

storageBucket: "sidamiu-14aa3.firebasestorage.app",

messagingSenderId: "472023784415",

appId: "1:472023784415:web:598113e7accbd46014826a",

measurementId: "G-SGZHVZPXYH"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);