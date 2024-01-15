import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
import { useState} from "react";
// import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import Blur from "../blur/Blur";
import technophilicsLogo from "../../assets/technophilicslogo.png";


function Headers() {
  const [togglenav, setTogglenav] = useState(false);
  const [togglepage, setTogglepage] = useState(false);

  const handleNav = () => {
    setTogglenav(!togglenav);
    setTogglepage(false);

  }


  const handlePage = () => {
    setTogglepage(!togglepage);
  };


  const closeNav = () => {
    setTogglenav(false);
    setTogglepage(false);
     
  };

 
  return (
    <>
      <header
        className={`fixed top-0 bg-white flex justify-between items-center px-5 lg:px-16 py-3 shadow-md overflow-hidden p-0 w-full z-50 transition-all duration-500 " 
      `}
      >
        {togglenav ? (
          <Blur togglenav={togglenav} setTogglenav={setTogglenav} />
        ) : null}
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
          <ul className="text-[14px] flex flex-col md:flex-row md:gap-5 font-medium text-black ">
            <li
              onClick={closeNav}
              className="border-b md:border-none p-3 px-7 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-[#00ABE4] hover:text-[#00ABE4]  translate-all duration-300"
            >
              <Link to="/">HOME</Link>
            </li>
            <li
              onClick={closeNav}
              className="border-b md:border-none p-3 px-7 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-[#00ABE4] hover:text-[#00ABE4]  translate-all duration-300"
            >
              <Link to="/products">PRODUCTS</Link>
            </li>
            <li
              onClick={closeNav}
              className="border-b md:border-none p-3 px-7 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-[#00ABE4] hover:text-[#00ABE4]  translate-all duration-300"
            >
              <Link to="/aboutus">ABOUT US</Link>
            </li>

            <li
              onClick={closeNav}
              className="border-b md:border-none p-3 px-7 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-[#00ABE4] hover:text-[#00ABE4]  translate-all duration-300"
            >
              <Link to="/service">OUR SERVICES</Link>
            </li>
            <li className="border-b md:border-none p-3 px-7 md:p-0 md:hidden">
              <span
                className="flex w-full items-center gap-1 md:hover:text-[#00ABE4] hover:text-[#00ABE4]  translate-all duration-300"
                onClick={handlePage}
              >
                <span className="cursor-pointer ">PAGES</span>
                {togglepage ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
              <div className="">
                {togglepage ? (
                  <ul className="bg-white m-3 flex flex-col gap-3 md:fixed top-7 right-24 md:p-4 md:pt-10 rounded-e-lg">
                    <li
                      onClick={closeNav}
                      className="md:hover:text-[#00ABE4] hover:text-[#00ABE4]  translate-all "
                    >
                      <Link to="/features">Features</Link>
                    </li>

                    <li
                      onClick={closeNav}
                      className="md:hover:text-[#00ABE4] hover:text-[#00ABE4]  translate-all "
                    >
                      <Link to="/testimonial">Testimonial</Link>
                    </li>
                  </ul>
                ) : null}
              </div>
            </li>
            <li
              className="border-b md:border-none p-3 px-7 md:p-0 hidden md:block"
              onMouseEnter={() => setTogglepage(true)}
              onMouseLeave={() => setTogglepage(false)}
            >
              <span
                className="flex w-full items-center gap-1 md:hover:text-[#00ABE4] hover:text-[#00ABE4]  translate-all duration-300"
                onClick={handlePage}
              >
                <span className="cursor-pointer ">PAGES</span>
                {togglepage ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
              <div className="">
                {togglepage ? (
                  <ul className="bg-white m-3 flex flex-col gap-3 md:fixed top-7 right-24 md:p-4 md:pt-10 rounded-e-lg">
                    <li
                      onClick={closeNav}
                      className="md:hover:text-[#00ABE4] hover:text-[#00ABE4]  translate-all "
                    >
                      <Link to="/features">Feature</Link>
                    </li>

                    <li
                      onClick={closeNav}
                      className="md:hover:text-[#00ABE4] hover:text-[#00ABE4]  translate-all "
                    >
                      <Link to="/testimonial">Testimonial</Link>
                    </li>
                  </ul>
                ) : null}
              </div>
            </li>
            <li
              onClick={closeNav}
              className="border-b md:border-none p-3 px-7 md:p-0 hover:bg-slate-50 md:hover:bg-transparent  md:hover:text-[#00ABE4] hover:text-[#00ABE4]  translate-all duration-300"
            >
              <Link to="/contactus">CONTACT US</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5 md:hidden">
          {/* <CgShoppingCart className="" /> */}
          <button className="transition-all duration-500" onClick={handleNav}>
            {togglenav ? (
              <CgClose className="text-[20px] transition-all duration-500 " />
            ) : (
              <CgMenuLeft className="text-[20px] transition-all duration-500" />
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default Headers;
