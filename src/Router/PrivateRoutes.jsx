import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return children;
    }
    return <Navigate to={'/Login'}></Navigate>
};

export default PrivateRoutes;