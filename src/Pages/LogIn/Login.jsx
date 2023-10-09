import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const Login = () => {
    const {signIn} =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
      e.preventDefault();
      console.log(e.currentTarget);
  
      const form = new FormData(e.currentTarget);
      
     
      const email = form.get("email");
      const password = form.get("password");
      
  
  
       //sign in
   signIn( email, password)
   .then(result =>{
    console.log(result.user);
    Swal.fire({
      icon: 'success',
      title: 'Oops...',
      text: "Successfully Login",
    
    })

  
    //navigate after log in 
    navigate(location?.state ? location.state : '/' );
  
   })
   .catch(error => {
 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text:`${error.message}`,
    
    })
   })
    };
  
   
    return (
      <div>
       
  
        <div className="justify-center lg:w-1/2 md:w-3/4 my-10 mx-auto bg-[#FFFFFF] shadow-xl p-5">
          <div className=" ">
            <h2 className="text-2xl text-center font-bold mb-10">
              
              Login your account
            </h2>
            <p className="border-b-2  mx-10"></p>
          </div>
          <form onSubmit={handleLogin} className="card-body  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn font-bold  bg-[#403F3F] text-white hover:bg-[#FF037C]">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-medium pb-8">
            Do not Have An Account ?
            <span className="text-[#FF037C]">
              
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
    );
  };
  
export default Login;