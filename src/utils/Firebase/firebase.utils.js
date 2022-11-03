import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

import { getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBm52q88l5yEPPcuBYX2ehspEwD_RMFA9s",
  authDomain: "andreatraberstudio.firebaseapp.com",
  projectId: "andreatraberstudio",
  storageBucket: "andreatraberstudio.appspot.com",
  messagingSenderId: "608163558942",
  appId: "1:608163558942:web:9b100b64a73dfefc8a600f",
  measurementId: "G-XGLG8EV89M"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);
export const signInWithFacebookRedirect = () => signInWithRedirect(auth, facebookProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additonalInformation = { displayName: '' }
  ) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

const userSnapshot = await getDoc(userDocRef);

//if user data does not exist, create it
if(!userSnapshot.exists()) {
  const { displayName, email,} = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additonalInformation
    });
  } catch (error) {
    console.log('error creating user', error.message);
  };
  
}
return userDocRef
//return user data
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
 return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
 return await signInWithEmailAndPassword(auth, email, password);
}
export const signOutUser = async () => {
  return await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => 
onAuthStateChanged(auth, callback );

