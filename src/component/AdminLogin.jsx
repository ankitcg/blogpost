import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {

  
  return (
    <div className="h-screen bg-cover bg-center flex flex-col">
      <div className="flex">
        <div className="my-40">
          <p className="font-extrabold text-4xl w-2/3 mx-36 text-black">
            All you needed was a wheel in your hand and four on the road.
          </p>
          <div className="my-14">
            <Link className="mx-40 text-2xl underline text-white" to="/">
              User Sign-In
            </Link>
          </div>
        </div>
        <div className="bg-slate-200 h-80 flex w-4/12 rounded-2xl mx-40 my-28">
          <form className="mx-4" >
            <h1 className="font-semibold text-lg my-5 text-left">
              Sign in to your Account
            </h1>
            <input
              className="my-8 h-8 block w-80 "
              type="text"
              placeholder="Phone/Email"
              
            />
            <input
              className="h-8 block w-80"
              type="password"
              placeholder="Password"
             
            />
            <Link className="block text-end text-blue-500" to="/">
              Forgot Password ?
            </Link>

            <div className="my-5 flex justify-end">
              <button
                type="submit"
                className="w-28 h-10 bg-slate-400 text-center rounded-2xl"
              >
                SIGN IN
              </button>
            </div>
            <Link to="/register" className="text-blue-600">
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
