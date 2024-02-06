import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home"
import Categories from "../pages/categories"
import Auth from "../pages/Auth"

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children: [
            
            {
                index:true,
                element:<Home />,

            },
            {
                path:"categories",
                element:<Categories />,
            },

            {
                path:"auth",
                element:<Auth/>
            }
        ]
    }
])