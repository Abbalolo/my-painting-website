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
    <footer className="bg-[#182333] text-white py-10 px-5">
      <div className="flex flex-col gap-3">
        <Link
          className="text-[25px] text-white  font-bold flex items-center"
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quidem
          doloribus excepturi harum, corrupti quis amet deleniti laudantium
          perferendis aperiam similique dolores autem. Eveniet vitae quidem et
          ad beatae eum.
        </p>

        <div className="flex items-center gap-2">
          <Link
            className="text-[25px] border border-[#00B7DD] text-[#00B7DD] p-2"
            to=""
          >
            <CgFacebook />
          </Link>
          <Link
            className="text-[25px] border border-[#00B7DD] text-[#00B7DD] p-2"
            to=""
          >
            <IoLogoWhatsapp />
          </Link>
          <Link
            className="text-[25px] border border-[#00B7DD] text-[#00B7DD] p-2"
            to=""
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>

      <h3 className="font-semibold text-[20px] mt-5">Address</h3>
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

      <h3 className="font-semibold text-[20px] mt-5">Quick Links</h3>

      <div className="flex flex-col gap-3 mt-3">
        <Link to="" className="flex items-center gap-1 ">
          <IoIosArrowForward />
          <span className="text-gray-300 hover:border-b-gray-50 hover:border-b">
            About US
          </span>
        </Link>
        <Link to="" className="flex items-center gap-1">
          <IoIosArrowForward />
          <span className="text-gray-300 hover:border-b-gray-50 hover:border-b">
            Contact US
          </span>
        </Link>
        <Link to="" className="flex items-center gap-1">
          <IoIosArrowForward />
          <span className="text-gray-300 hover:border-b-gray-50 hover:border-b">
            Our Services
          </span>
        </Link>
        <Link to="" className="flex items-center gap-1">
          <IoIosArrowForward />
          <span className="text-gray-300 hover:border-b-gray-50 hover:border-b">
            Terms & Condition
          </span>
        </Link>
      </div>

      <div className="h-[1px] w-full bg-gray-500 mt-10 mb-5"></div>

      <p className="text-center">
        © Technophilic 2012,{" "}
        <span className="text-gray-400">All Right Reserved.</span>
      </p>
    </footer>
  );
}

export default Footer;
