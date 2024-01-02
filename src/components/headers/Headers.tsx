import { CgClose } from "react-icons/cg"; 
import { CgMenuLeft } from "react-icons/cg"; 
import { useState } from "react";
import { CgShoppingCart } from "react-icons/cg"; 
import { Link } from "react-router-dom"
import Blur from "../blur/Blur";

function Headers() {

    const [toggle, setToggle] = useState(false)
  return (
    <header className="flex justify-between items-center p-5 shadow-md bg-[#365486] ">
      <Link className="text-[20px] text-white font-bold" to="/">
        Capstone
      </Link>
      <nav
        className={
          toggle
            ? "bg-white shadow-lg fixed top-16 left-0  w-full  z-50 transition-all duration-500"
            : "bg-white  -left-full shadow-lg fixed top-14 md:top-0 md:static md:shadow-none h-[50%] z-50 md:bg-transparent md:text-white"
        }
      >
        <ul className="text-[16px] flex flex-col md:flex-row md:gap-5 font-medium">
          <Link
            className="border-b md:border-none p-3 px-5 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-blue-600 hover:text-[#365486]  translate-all duration-300"
            to=""
          >
            Home
          </Link>

          <Link
            className="border-b md:border-none p-3 px-5 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-blue-600 hover:text-[#365486]  translate-all duration-300"
            to=""
          >
            Our Services
          </Link>

          <Link
            className="border-b md:border-none p-3 px-5 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-blue-600 hover:text-[#365486]  translate-all duration-300"
            to=""
          >
            Testimonials
          </Link>

          <Link
            className="border-b md:border-none p-3 px-5 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-blue-600 hover:text-[#365486]  translate-all duration-300"
            to=""
          >
            About Us
          </Link>

          <Link
            className="border-b md:border-none p-3 px-5 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-blue-600 hover:text-[#365486] translate-all duration-300"
            to=""
          >
            Contact Us
          </Link>
        </ul>
      </nav>
      <div className="flex items-center gap-5 md:hidden">
        <CgShoppingCart className="text-white" />
        <button
          className="transition-all duration-500"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <CgClose className="text-[20px] transition-all duration-500 text-white" />
          ) : (
            <CgMenuLeft className="text-[20px] transition-all duration-500 text-white" />
          )}
        </button>
      </div>
      {toggle ? <Blur /> : null}
    </header>
  );
}

export default Headers