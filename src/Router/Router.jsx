import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import Profile from "../Pages/Profile/Profile";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Products',
                element: <Products></Products>,
                loader: () => fetch('glasses.json')
            },
            {
                path: '/Login',
                element: <Login></Login>
            },

            {
                path: '/Register',
                element: <Register></Register>
            },
            {
                path: '/Profile',
                element: <Profile></Profile>
            }
        ]
    }
])

export default Router;