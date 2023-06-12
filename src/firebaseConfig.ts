// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4o43yyEPEcr755yC3AVFPX4Q44RmbAT8",
  authDomain: "shoutouts-d6b68.firebaseapp.com",
  projectId: "shoutouts-d6b68",
  storageBucket: "shoutouts-d6b68.appspot.com",
  messagingSenderId: "820700811303",
  appId: "1:820700811303:web:735597bd49dbaa7bdbfe02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
