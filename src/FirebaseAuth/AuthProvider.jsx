import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider()
const gitHubAuth= new GithubAuthProvider()

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut =()=>{
    setLoader(true)
    return signOut(auth)
  }
  const updateUser=(name,photoUrl)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoUrl
      })
  }
  
  const loginGoogle=()=>{
    setLoader(true)
    return signInWithPopup(auth,googleAuth)
  }
  const loginGithub=()=>{
    setLoader(true)
    return signInWithPopup(auth,gitHubAuth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
      setLoader(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    setUser,
    updateUser,
    loader,
    loginGoogle,
    loginGithub
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
