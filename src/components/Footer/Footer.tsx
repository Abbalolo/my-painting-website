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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            quidem doloribus excepturi harum, corrupti quis amet deleniti
            laudantium perferendis aperiam similique dolores autem. Eveniet
            vitae quidem et ad beatae eum.
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
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex items-center gap-3">
              <ImLocation />
              <span className="text-gray-300">123 street</span>
            </div>
            <div className="flex items-center gap-3">
              <ImLocation />
              <span className="text-gray-300">123 street</span>
            </div>
            <div className="flex items-center gap-3">
              <BsTelephoneFill />
              <span className="text-gray-300">123 street</span>
            </div>
            <div className="flex items-center gap-3">
              <AiTwotoneMail />
              <span className="text-gray-300">123 street</span>
            </div>
          </div>
        </div>

        <div className="lg:mt-0 mt-5 ">
          <h3 className="font-semibold text-[20px] ">Quick Links</h3>

          <div className="flex flex-col gap-3 mt-3">
            <Link
              to="/aboutus"
              className="flex items-center gap-1 hover:text-[18px] transition-all duration-300"
            >
              <IoIosArrowForward />
              <span className="text-gray-300">About US</span>
            </Link>
            <Link
              to="/contactus"
              className="flex items-center gap-1 hover:text-[18px] transition-all duration-300"
            >
              <IoIosArrowForward />
              <span className="text-gray-300">Contact US</span>
            </Link>
            <Link
              to="/service"
              className="flex items-center gap-1 hover:text-[18px] transition-all duration-300"
            >
              <IoIosArrowForward />
              <span className="text-gray-300">Our Services</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-1 hover:text-[18px] transition-all duration-300"
            >
              <IoIosArrowForward />
              <span className="text-gray-300">Terms & Condition</span>
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
