import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDM-2-KYdgeF23Ox00ZKXmPMGrrc6eaVS0",
  authDomain: "test-db-b8259.firebaseapp.com",
  projectId: "test-db-b8259",
  storageBucket: "test-db-b8259.appspot.com",
  messagingSenderId: "883487665733",
  appId: "1:883487665733:web:a96dcc82b056fef4847d2c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
