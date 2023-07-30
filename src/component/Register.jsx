import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      console.log(response.data);
      setUserName("");
      setEmail("");

      setPassword("");

      if (response.status === 200) {
        // Redirect to the success page
        navigate("/");
        alert("User Registerd Successfully");
      } else {
        // Handle unsuccessful registration
        console.log("Registration failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen bg-cover bg-center flex flex-col">
      <div className="flex">
        <div className="my-40">
          <p className="font-extrabold text-4xl w-2/3 mx-36 text-black">
            Share Your Ideas With Blogging...
          </p>
        </div>
        <div className="bg-slate-200 h-3/4 flex w-4/12 rounded-2xl mx-40 my-28">
          <form className="mx-4" onSubmit={submitHandler}>
            <h1 className="font-semibold text-lg my-5 text-left">
              Register in to your Account
            </h1>
            <input
              className="my-8 h-8 block w-80 "
              type="text"
              placeholder="User-Name"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              className="my-8 h-8 block w-80 "
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="h-8 block w-80"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="my-5 flex justify-end">
              <button
                className="w-28 h-10 bg-slate-400 text-center rounded-2xl"
                type="submit"
              >
                Register
              </button>
            </div>
            <Link className="text-blue-600" to="/">
              Sign In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
