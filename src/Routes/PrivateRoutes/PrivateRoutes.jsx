import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex text-center justify-center items-center "><span className="loading bg-[#FF037C]  loading-spinner loading-lg"></span></div>
    }

    if(user){
        return children;
    }
    
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoutes;