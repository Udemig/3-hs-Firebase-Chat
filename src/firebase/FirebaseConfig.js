// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAEkv4VJX2ZdYU_qbqa1US1bpTBCe_O66M',
  authDomain: 'chatodasi-8e965.firebaseapp.com',
  projectId: 'chatodasi-8e965',
  storageBucket: 'chatodasi-8e965.appspot.com',
  messagingSenderId: '780141742396',
  appId: '1:780141742396:web:d15dd8c6b093ba3be73639',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
