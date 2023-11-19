import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Details from "../Components/Details/Details";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Employee from "../Pages/Employee/Employee";
import Service from "../Pages/Service/Service";
import Gallery from "../Pages/Gallery/Gallery";

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
                path: '/about',
                element: <PrivateRoutes>
                    <About></About>
                </PrivateRoutes>
            }, 
            {
                path:'/employee',
                element:<PrivateRoutes>
                     <Employee></Employee>
                </PrivateRoutes>,
                loader: () => fetch('/employee.json')

            }, 
            {
                path: '/services',
                element:  <PrivateRoutes>
                    <Service></Service>
                </PrivateRoutes>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/gallery',
                element: <PrivateRoutes>
                    <Gallery></Gallery>
                </PrivateRoutes>,
                loader: () => fetch('/gallery.json')
            }
        ]

    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>

    },
])
export default Route;