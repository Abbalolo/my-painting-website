import { AiTwotoneMail } from "react-icons/ai"; 
import { ImLocation } from "react-icons/im"; 
import { IoIosArrowForward } from "react-icons/io"; 
import { BsTelephoneFill } from "react-icons/bs"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { IoLogoWhatsapp } from "react-icons/io"; 
import { CgFacebook } from "react-icons/cg"; 
import { Link } from "react-router-dom";
import technophilicsLogo from "../../assets/technophilicslogo.png";
function Footer() {
  return (
    <footer className="bg-[#182333] text-white lg:px-20 lg:pt-10 p-5 md:p-16 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3   lg:gap-10">
        <div className="flex flex-col gap-3 ">
          <Link
            className="text-[20px] text-white  font-bold flex items-center"
            to="/"
          >
            <img
              className="w-[60px] h-full"
              src={technophilicsLogo}
              alt="technophilics logo"
            />
            Technophilics
          </Link>
          <p className="text-gray-300 my-5">
            Welcome to Technophilic Engr. LTD, where painting meets perfection!
            Our seasoned professionals specialize in transforming residential
            and industrial spaces into artful masterpieces.
          </p>

          <div className="flex items-center gap-2">
            <Link
              className="text-[25px] border border-[#00ABE4] text-[#00ABE4] p-2"
              to=""
            >
              <CgFacebook />
            </Link>
            <Link
              className="text-[25px] border border-[#00ABE4] text-[#00ABE4] p-2"
              to=""
            >
              <IoLogoWhatsapp />
            </Link>
            <Link
              className="text-[25px] border border-[#00ABE4] text-[#00ABE4] p-2"
              to=""
            >
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
        <div className="lg:mt-0 mt-5 flex flex-col md:items-center">
          <h3 className="font-semibold text-[20px] ">Address</h3>
          <div className="flex flex-col gap-5 mt-3">
            <div className="flex  gap-3">
              <ImLocation className="text-[35px] md:text-[45px]" />
              <span className="text-gray-300 ">
                4&5 Aja Shopping Mall opposite ilaje Bus Stop, Off Lekki Epe
                Express Way, Ajah Lagos Nigeria.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <ImLocation className="text-[20px] " />
              <span className="text-gray-300">10 Olowu Street Agege Lagos</span>
            </div>
            <div className="flex items-center gap-3">
              <BsTelephoneFill className="text-[20px] " />
              <span className="text-gray-300">
                +2348036360336 <br /> +23408099009998
              </span>
            </div>
            <div className="flex gap-3">
              <AiTwotoneMail className="text-[20px]" />
              <span className="text-gray-300 ">tecnophilic@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="lg:mt-0 mt-5 ">
          <h3 className="font-semibold text-[20px] ">Quick Links</h3>

          <div className="flex flex-col gap-3 mt-3">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-[18px] transition-all duration-300"
            >
              <IoIosArrowForward />
              <span className="text-gray-300">Home</span>
            </Link>
            <Link
              to="/aboutus"
              className="flex items-center gap-1 hover:text-[18px] transition-all duration-300"
            >
              <IoIosArrowForward />
              <span className="text-gray-300">About US</span>
            </Link>
            <Link
              to="/aboutus"
              className="flex items-center gap-1 hover:text-[18px] transition-all duration-300"
            >
              <IoIosArrowForward />
              <span className="text-gray-300">Product</span>
            </Link>

            <Link
              to="/service"
              className="flex items-center gap-1 hover:text-[18px] transition-all duration-300"
            >
              <IoIosArrowForward />
              <span className="text-gray-300">Our Services</span>
            </Link>
            <Link
              to="/contactus"
              className="flex items-center gap-1 hover:text-[18px] transition-all duration-300"
            >
              <IoIosArrowForward />
              <span className="text-gray-300">Contact US</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-500 mt-10 mb-5"></div>

      <p className="text-center pb-5">
        © Technophilic 2012,{" "}
        <span className="text-gray-400">All Right Reserved.</span>
      </p>
    </footer>
  );
}

export default Footer;
