import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../firebase/Firebase.config'

export const userContext = createContext();
const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    // google sign in
    const googleSignIn = () => signInWithPopup(auth, provider);

    // sign in with email and password
    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // login with email and password
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // updata user
    const updateUser = (profile) => updateProfile(auth.currentUser, profile);

    // logout
    const logout = () => signOut(auth);

    // getCurrent user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    const authInfo = { googleSignIn, user, loading,CreateUser,login,updateUser, logout };

    return (
        <userContext.Provider value={authInfo}>{children}</userContext.Provider>
    );
};

export default AuthProvider;