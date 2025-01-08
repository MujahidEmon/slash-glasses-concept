import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const Root = () => {
    return (
        <div >
            <div className="font-mont lg:max-w-7xl  mx-auto">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;