import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Details from "../Components/Details/Details";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";

const Route = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/allData/:id",
                element: <PrivateRoutes>
                    <Details></Details>
                </PrivateRoutes>,
                loader: () => fetch('/data.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>

            }, 
            {
                path: '/about',
                element: <PrivateRoutes>
                    <About></About>
                </PrivateRoutes>
            }
        ]

    }
])
export default Route;