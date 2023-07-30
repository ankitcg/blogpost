import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = ({ showHeader, setShowHeader }) => {
    localStorage.removeItem("token");

    navigate("/");
  };

  const isLoggedIn = !localStorage.getItem("token");
  return (
    <nav className="flex border-black border-b-2 justify-between">
      <Link to="/">
        <h1 className="text-2xl font-semibold text-black my-2 mx-4">
          SimplyBlog...
        </h1>
      </Link>
      <Link to="/login">
        <button className="text-xl mx-2 my-2 w-36 text-white text-center rounded-3xl bg-green-600 h-10 border">
          Login/Register
        </button>
      </Link>
      {isLoggedIn && (
        <div>
          <Link to="/write">
            <button className="text-xl mx-2 my-2 w-36 text-white text-center rounded-3xl bg-green-600 h-10 border">
              Write
            </button>
          </Link>
          <Link to="/">
            <button
              onClick={handleLogout}
              className="text-xl mx-2 my-2 w-24 text-white text-center rounded-3xl bg-green-600 h-10 border"
            >
              Logout
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
