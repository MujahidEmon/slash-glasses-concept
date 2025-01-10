import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        return signOut(auth)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubLogin = () =>{
        return signInWithPopup(auth, gitProvider)
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
       user,
       googleLogin,
       gitHubLogin

    }
    return (
        <AuthContext.Provider value={AuthProvider}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;