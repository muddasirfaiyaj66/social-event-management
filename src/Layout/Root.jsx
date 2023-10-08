import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
        <div className="max-w-screen-xl mx-auto">
        <Navbar ></Navbar>
        </div>
      
      <div className="max-w-screen-xl mx-auto p-5 md:p-10 my-10">
      
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
