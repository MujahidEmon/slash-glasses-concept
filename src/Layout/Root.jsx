import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";


const Root = () => {
    return (
        <div className="font-mont max-w-7xl mx-auto">
            <NavBar></NavBar>
            <h1>Root</h1>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;