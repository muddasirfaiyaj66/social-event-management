import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-poppins">
        <div className="max-w-screen-xl mx-auto">
        <Navbar ></Navbar>
        </div>
      
      <div >
      
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
