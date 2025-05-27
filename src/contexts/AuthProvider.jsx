import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const [loading, setLoading] = useState(true);

    const createuser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
    }


    const authInfo = {
        loading,
        createuser,

    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;