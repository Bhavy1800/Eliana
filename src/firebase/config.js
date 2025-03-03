import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuT_8symDvBOgN4lQR0gMH0wECJGUVtnE",
  authDomain: "eliana-36c7f.firebaseapp.com",
  projectId: "eliana-36c7f",
  storageBucket: "eliana-36c7f.appspot.com",
  messagingSenderId: "443506151422",
  appId: "1:443506151422:web:c4271898b185211e51faaf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

// {
//     "phoneNumber": null,
//     "id": "q8ITqijyMJEhWJeIEbRW",
//     "uid": "104494384134089029230",
//     "createdAt": {
//         "seconds": 1715850953,
//         "nanoseconds": 570000000
//     },
//     "email": "mavadiyadivyesh56@gmail.com",
//     "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocJOzeUPcRBma4sy6MBh8sdy54iStBXy9y7vVBrHzODqgDiJIc45=s96-c",
//     "displayName": "Divyesh Mavadiya",
//     "providerId": "google.com",
//     "createdBy": "knpSrvWWiwU7YVTGQ7wN9oPyces1"
// }
