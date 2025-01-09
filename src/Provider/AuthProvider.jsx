import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unSubscribe();
    },[])
    const AuthProvider = {
       createUser,
       login,
       logout,
       user

    }
    return (
        <AuthContext.Provider value={AuthProvider}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;