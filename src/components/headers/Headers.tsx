import { CgClose } from "react-icons/cg"; 
import { CgMenuLeft } from "react-icons/cg"; 
import { useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg"; 
import { Link } from "react-router-dom"
import Blur from "../blur/Blur";
import technophilicsLogo from "../../assets/technophilicslogo.png";

function Headers() {

  const [togglenav, setTogglenav] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`bg-white flex justify-between items-center p-5 shadow-md  overflow-hidden${
        isScrolled ? "fixed top-0 w-full z-50 transition-all duration-500 " : ""
      }`}
    >
      <Link
        className="text-[16px] text-blue-950  font-bold flex items-center"
        to="/"
      >
        <img
          className="w-[40px] h-full"
          src={technophilicsLogo}
          alt="technophilics logo"
        />
        Technophilics
      </Link>
      <nav
        className={
          togglenav
            ? "bg-white shadow-lg fixed top-16 left-0  w-full  z-50 transition-all duration-500"
            : "bg-white  -left-full shadow-lg fixed top-14 md:top-0 md:static md:shadow-none h-[50%] z-50 md:bg-transparent md:text-white"
        }
      >
        <ul className="text-[16px] flex flex-col md:flex-row md:gap-5 font-medium">
          <Link
            onClick={() => setTogglenav(!togglenav)}
            className="border-b md:border-none p-3 px-7 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-[#00B7DD] hover:text-[#00B7DD]  translate-all duration-300"
            to="/"
          >
            Home
          </Link>

          <Link
            onClick={() => setTogglenav(!togglenav)}
            className="border-b md:border-none p-3 px-7 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-[#00B7DD] hover:text-[#00B7DD]  translate-all duration-300"
            to="service"
          >
            Our Services
          </Link>

          <Link
            onClick={() => setTogglenav(!togglenav)}
            className="border-b md:border-none p-3 px-7 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-[#00B7DD] hover:text-[#00B7DD] translate-all duration-300"
            to=""
          >
            Testimonials
          </Link>

          <Link
            onClick={() => setTogglenav(!togglenav)}
            className="border-b md:border-none p-3 px-7 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-[#00B7DD] hover:text-[#00B7DD]  translate-all duration-300"
            to=""
          >
            About Us
          </Link>

          <Link
            onClick={() => setTogglenav(!togglenav)}
            className="border-b md:border-none p-3 px-7 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-[#00B7DD] hover:text-[#00B7DD] translate-all duration-300"
            to=""
          >
            Contact Us
          </Link>
        </ul>
      </nav>
      <div className="flex items-center gap-5 md:hidden">
        <CgShoppingCart className="" />
        <button
          className="transition-all duration-500"
          onClick={() => setTogglenav(!togglenav)}
        >
          {togglenav ? (
            <CgClose className="text-[20px] transition-all duration-500 " />
          ) : (
            <CgMenuLeft className="text-[20px] transition-all duration-500" />
          )}
        </button>
      </div>
      {togglenav ? (
        <Blur togglenav={togglenav} setTogglenav={setTogglenav} />
      ) : null}
    </header>
  );
}

export default Headers