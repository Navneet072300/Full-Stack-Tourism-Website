import React, { useState } from "react";
import logo from "/profile/Logo NAV.png";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const navigateToLogIn = () => {
    navigate("/login");
  };
  const navigateToSignup = () => {
    navigate("/signup");
  };
  const [click, setClick] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <nav className="navbar flex justify-between items-center p-5 flex-wrap md:justify-between">
        <div className=" ml-5">
          <a href="/">
            <img
              className=" logo rounded-full w-[100px] h-[100px] cursor-pointer"
              src={logo}
              alt="logo"
            />
          </a>
        </div>
        <div className="">
          <h1 className="logo-name md:mr-auto">yatrionyatra</h1>
        </div>
        <div
          className=" md:hidden menu-icon text-3xl cursor-pointer "
          onClick={() => setClick(!click)}
        >
          {click ? <ImCross /> : <FaBars />}
        </div>
        <div
          className={`flex items-center gap-4 ${
            click ? "flex items-center ml-[8rem]  mt-4" : "hidden md:flex"
          } `}
        >
          <button
            className="btn text-base md:text-xl px-4 py-2 md:px-6 md:py-4 rounded-lg"
            onClick={navigateToLogIn}
          >
            Sign In
          </button>
          <button
            className="btn text-base md:text-xl px-4 py-2 md:px-6 md:py-4 rounded-lg"
            onClick={navigateToSignup}
          >
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
