// import { AiOutlineArrowRight } from "react-icons/ai";
import { BiCheckDouble } from "react-icons/bi"; 
// import { Link } from "react-router-dom";
import aboutimage from "../../assets/aboutimage.png";
import { Link } from "react-router-dom";

function WhyChooseUs() {
  return (
    <>
      <div className="relative h-[300px] w-full mt-10">
        <img
          className="absolute inset-0 h-full w-full object-cover brightness-[50%]"
          src="https://images.unsplash.com/photo-1634051808431-dda4b7450b72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFpbnQlMjBzZXJ2aWNlfGVufDB8MHwwfHx8Mg%3D%3D"
          alt="aboutus"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
          <h2 className="font-extrabold text-3xl">About Us</h2>
          <ul className="flex items-center justify-center space-x-2 mt-5">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <span>/</span>
            <li>
              <Link to="aboutus" className=" text-[#00B7DD]">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="bg-white flex flex-col gap-10 lg:flex-row p-5 md:p-16 lg:p-20 ">
        <div className="md:w-[90%]">
          <div className="">
            <div className="flex gap-5 ">
              <div className="w-[7px] h-[120px] lg:h-[130px] md:h-[100px] bg-[#00B7DD]"></div>
              <div>
                <p className="font-bold text-gray-400">WHY CHOOSE US</p>
                <h2 className="font-bold lg:text-[40px] text-[30px]">
                  Expertise and Distinctive Company Attributes
                </h2>
              </div>
            </div>
            <p className="text-gray-500 leading-7 mt-5 ">
              Choose Technophilic Engr. LTD for excellence in transforming
              spaces into artful masterpieces. Our seasoned professionals
              specialize in precise painting, enchanting decorations, and
              personalized color consultations. Elevate your surroundings with
              our commitment to crafting unique experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col gap-2">
              <h3 className="flex items-center gap-3 font-bold text-[18px]">
                <BiCheckDouble className="font-extrabold text-[40px] text-[#00B7DD]" />
                11+ years of professional experience
              </h3>
              <p className="text-gray-500">
                Magna sea eos sit dolor, ipsum amet ipsum lorem diam
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="flex items-center gap-3 font-bold text-[18px]">
                <BiCheckDouble className="font-extrabold text-[40px] text-[#00B7DD]" />
                Large number of services provided
              </h3>
              <p className="text-gray-500">
                Magna sea eos sit dolor, ipsum amet ipsum lorem diam
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="flex items-center gap-3 font-bold text-[18px]">
                <BiCheckDouble className="font-extrabold text-[40px] text-[#00B7DD]" />
                A large number of grateful customers
              </h3>
              <p className="text-gray-500">
                Magna sea eos sit dolor, ipsum amet ipsum lorem diam
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="flex items-center gap-3 font-bold text-[18px]">
                <BiCheckDouble className="font-extrabold text-[40px] text-[#00B7DD]" />
                Always reliable and affordable prices
              </h3>
              <p className="text-gray-500">
                Magna sea eos sit dolor, ipsum amet ipsum lorem diam
              </p>
            </div>
          </div>
        </div>

        <img
          className="object-contain hidden  lg:block  lg:w-[400px] h-full"
          src={aboutimage}
          alt="man with paint brush"
        />
        {/* <button className=" bg-[#00B7DD] text-white p-2 w-[130px] mt-5">
        <Link className="flex items-center gap-2" to="contactUs">
          Contact US {""}
          <AiOutlineArrowRight />
        </Link>
      </button> */}
      </section>
    </>
  );
}

export default WhyChooseUs