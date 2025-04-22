// firebaseConfig.ts
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBgj6FPhmtOnBS52jvdAHhjGS_xSSbPGlo",
  authDomain: "apexaid-882aa.firebaseapp.com",
  projectId: "apexaid-882aa",
  storageBucket: "apexaid-882aa.firebasestorage.app",
  messagingSenderId: "902401082647",
  appId: "1:902401082647:web:ae976f961b16dbd1772352"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
