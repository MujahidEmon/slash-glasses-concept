import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        return signOut(auth)
    }
    const AuthProvider = {
       createUser,
       login,
       logout

    }
    return (
        <AuthContext.Provider value={AuthProvider}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;