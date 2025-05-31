import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createuser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            if(currentUser?.email){
                const userData = {email: currentUser.email};
                axios.post('http://localhost:3000/jwt', userData, {
                    withCredentials: true // for cookies
                })
                    .then(res => {
                        console.log('token after jwt', res.data);

                        // simple way to store token but not recommended is - store in local storage
                        // const token = res.data.token;
                        // localStorage.setItem('token', token);
                    })
                    .catch(err => console.log(err))
            }
        })
        return () =>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        loading,
        user,
        createuser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;