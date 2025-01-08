import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";


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
            }
        ]
    }
])

export default Router;