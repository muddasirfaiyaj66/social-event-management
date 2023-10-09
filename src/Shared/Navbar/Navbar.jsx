import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {

  const {user,logOut} =useContext(AuthContext);
  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
  }
    const navLinks = <>

    
               <li> <NavLink to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#FF037C]  text-white " : ""
  }>Home</NavLink></li>
               <li> <NavLink to='/about' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#FF037C]  text-white " : ""
  }>About</NavLink></li>
               <li> <NavLink to='/services' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#FF037C]  text-white " : ""
  }>Services</NavLink></li>
              
               <li> <NavLink to='/gallery' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#FF037C]  text-white " : ""
  }>Gallery</NavLink></li>
               <li> <NavLink to='/employee' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#FF037C]  text-white " : ""
  }>Employee</NavLink></li>
   <li> <NavLink to='/register' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#FF037C]  text-white " : ""
  }>Register</NavLink></li>
                
    </>
    return (
        <div  data-aos="fade-up"
        data-aos-duration="1500" className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
              {navLinks}
            </ul>
          </div>
        <div className="hidden md:flex">
          <img className="w-[120px]  md:w-[150px] flex items-center justify-center" src="/logo.png" alt="" />
        </div>
        </div>
        <div className="navbar-center hidden  md:flex">
          <ul className="menu menu-horizontal px-1 font-bold gap-5 text-lg">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-10 rounded-full">
          <img src={user? "/user1.png" : "/nouser.png" } />
        </div>
      </label>

        
      {
        user ? 
        <div> 
          
      <button onClick={handleSignOut} className="btn ml-2 bg-[#7800FF] text-white">Sign Out</button>
        </div>
       
        :
        <Link to='/login'>
         <button className="btn ml-2 bg-gradient-to-r from-[#FF037C] to-[#7800FF] text-white">Login</button>
         </Link>

      }
        </div>
      </div>
    );
};

export default Navbar;