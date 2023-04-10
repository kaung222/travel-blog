import React, { useState } from "react";
import { FiHexagon, FiLogOut, FiHome } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import { SlPaperPlane } from "react-icons/sl";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight, BiPlus } from "react-icons/bi";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  // window.onscroll(showNav(showNav(false)));
  // console.log(showNav);
  return (
    <div className="">
      <div className="flex fixed top-0 left-0 md:flex-col lg:flex-col z-10 lg:w-[100px] md:w-[80px] h-[60px] w-full lg:h-screen md:h-screen shadow-lg hover:shadow-slate-700 border-r-[1px] justify-between md:py-[40px] px-[40px] lg:py-[40px] items-center">
        <Link to="/">
          <div className=" w-[40px] h-[40px] rounded hover:bg-slate-200">
            <FiHexagon className="w-full h-full p-2 hover:text-blue-700" />
          </div>
        </Link>
        <div
          className="w-[40px] h-[40px] block lg:hidden md:hidden rounded hover:bg-slate-200"
          onClick={() => setShowNav(!showNav)}
        >
          <BiMenuAltRight className="w-full h-full p-3 hover:text-blue-700 " />
        </div>
        <div
          className={`lg:flex md:flex flex-col gap-2 ${
            showNav
              ? "flex mt-[298px] absolute right-0 bg-slate-300 p-6 py-10"
              : "hidden"
          }`}
        >
          <NavLink to="/">
            <div className="w-[40px] h-[40px] inline-block rounded hover:bg-slate-200">
              <FiHome className="w-full h-full p-3 hover:text-blue-700" />
            </div>
          </NavLink>
          <NavLink to="/about">
            <div className="w-[40px] h-[40px] inline-block  rounded hover:bg-slate-200">
              <BsInfoCircle className="w-full h-full p-3 hover:text-blue-700" />
            </div>
          </NavLink>
          <NavLink to="/contact">
            <div className="w-[40px] lg:block inline-block md:block  h-[40px] rounded hover:bg-slate-200">
              <SlPaperPlane className="w-full h-full p-3 hover:text-blue-700" />
            </div>
          </NavLink>
          <NavLink to="/create">
            <div className="w-[40px] lg:block inline-block md:block  h-[40px] rounded hover:bg-slate-200">
              <BiPlus className="w-full h-full p-3 hover:text-blue-700" />
            </div>
          </NavLink>
        </div>
        <div className="w-[40px] h-[40px] lg:block md:block hidden rounded hover:bg-slate-200">
          <button
            onClick={() => {
              localStorage.removeItem("users");
              navigate("/login");
            }}
            className="w-full h-full p-2 hover:text-blue-700"
          >
            <FiLogOut className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
