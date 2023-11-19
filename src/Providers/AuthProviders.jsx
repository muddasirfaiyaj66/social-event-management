import { createContext, useEffect, useState } from "react";

import app from "../Firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
    const [user, setUser] =useState(null);
    const [loading , setLoading] =useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    };
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const handleUpdateProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unsubscribe();
        }
    },[]);

    const authInfo = {
        user, createUser, logOut, signIn, loading,signInWithGoogle,handleUpdateProfile
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;