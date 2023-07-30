import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            // Attach the token to the Authorization header
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setEmail("");
      setPassword("");
      if (response.status === 200) {
        // Redirect to the success page
        localStorage.setItem("token", response.data.token);
        navigate("/write");
        alert("User Logged-In Successfully");
      } else {
        // Handle unsuccessful registration
        console.log("Login failed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-between"
    >
      <div className="m-4 md:m-10">
        <p className="font-extrabold text-2xl md:text-4xl text-black mb-4 md:mb-6">
          Share Your Ideas With Blogging...
        </p>
        <div className="mb-4 md:mb-8">
          <Link
            className="text-1xl md:text-2xl underline text-black mr-2 md:mr-4"
            to="/register"
          >
            Register
          </Link>
          <Link
            className="text-1xl md:text-2xl underline text-black"
            to="/admin"
          >
            Admin Login
          </Link>
        </div>
      </div>
      <div className="bg-slate-200 p-4 rounded-2xl mx-4 md:mx-10 mb-4 md:mb-10 flex justify-center">
        <form className="w-full md:w-80" onSubmit={submitHandler}>
          <h1 className="font-semibold text-xl md:text-2xl mb-5 md:mb-6 text-center">
            Sign in to your Account
          </h1>
          <input
            className="mb-4 md:mb-6 h-8 block w-full"
            type="text"
            placeholder="Phone/Email"
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
          />
          <input
            className="mb-4 md:mb-6 h-8 block w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
          />
          <Link className="block text-right text-blue-500 mb-4 md:mb-6" to="/">
            Forgot Password ?
          </Link>
          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              className="w-24 md:w-28 h-10 bg-slate-400 text-center rounded-2xl"
              
            >
              SIGN IN
            </button>
          </div>
          <Link className="block text-center text-blue-600 mt-4 md:mt-6" to="/register">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
