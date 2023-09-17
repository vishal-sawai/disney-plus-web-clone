import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBjJFaeYqUunLwdd6KW_WxiefGIuUz3DRg",
  authDomain: "hosterwebclone.firebaseapp.com",
  projectId: "hosterwebclone",
  storageBucket: "hosterwebclone.appspot.com",
  messagingSenderId: "540253348160",
  appId: "1:540253348160:web:b78234869baff7e384daa5",
  measurementId: "G-Q18Z24CP60"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;

