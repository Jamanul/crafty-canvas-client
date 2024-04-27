import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {  createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext =createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(false)
    const createUser =(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        user,
        createUser,
        signInUser
    }

    return ( 
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;