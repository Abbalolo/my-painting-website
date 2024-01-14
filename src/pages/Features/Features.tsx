
import aboutImage from "../../assets/aboutimage.png"
import { EmblaCarousel2 } from '../../components/carousel2/EmblaCarousel2';
import { BsCheckAll, BsPeopleFill } from 'react-icons/bs';
import { BiCheckDouble } from 'react-icons/bi';
import { Link } from "react-router-dom";

function Features() {
  return (
    <>
      <div className="relative h-[300px] w-full ">
        <img
          className="absolute inset-0 h-full w-full object-cover brightness-[50%]"
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBhaW50aW5nJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
          alt="why choose us"
          loading="lazy"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
          <h2 className="font-extrabold md:text-[40px] text-[30px]">
            Features
          </h2>
          <ul className="flex items-center justify-center space-x-2 mt-5">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <span>/</span>
            <li>
              <Link to="aboutus" className=" text-[#00B7DD]">
                Feature
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="bg-white flex flex-col  gap-10 lg:flex-row p-5 md:p-16 lg:p-20 ">
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
            <p className="text-gray-500 text-[14px] md:text-[16px] leading-7 mt-5 ">
              Choose Technophilic Engr. LTD for excellence in transforming
              spaces into artful masterpieces. Our seasoned professionals
              specialize in precise painting, enchanting decorations, and
              personalized color consultations. Elevate your surroundings with
              our commitment to crafting unique experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mt-5">
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
          className="object-contain h-[500px]  lg:block  lg:w-[400px] "
          src={aboutImage}
          alt="man with paint brush"
        />
        {/* <button className=" bg-[#00B7DD] text-white p-2 w-[130px] mt-5">
        <Link className="flex items-center gap-2" to="contactUs">
          Contact US {""}
          <AiOutlineArrowRight />
        </Link>
      </button> */}
      </section>

      <section className="bg-white flex flex-col  gap-10 lg:flex-row p-5 md:px-16 lg:px-20 ">
        <div>
          <div className="">
            <div className="flex  gap-5 ">
              <div className="w-[5px] h-[120px]  md:h-[110px] lg:h-[70px] bg-[#00B7DD]"></div>
              <div>
                <p className="font-bold text-gray-400">TESTIMONIAL</p>
                <h2 className="font-bold text-[30px]">
                  What Our Happy Clients Say!
                </h2>
              </div>
            </div>
            <p className="text-gray-500 text-[14px] md:text-[16px] leading-7 mt-5 ">
              Technophilic Engr. LTD transformed our space into a masterpiece
              with precise painting, enchanting decorations, and personalized
              color consultations. Elevate your surroundings with their
              unmatched expertise!
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mt-5">
            <div>
              <div className="text-[30px] flex items-center gap-2 ">
                <BsPeopleFill className="text-[#00B7DD]" />
                200+
              </div>
              <span className="font-bold text-[25px]">Happy Clients</span>
            </div>
            <div>
              <div className="text-[30px] flex items-center gap-2">
                <BsCheckAll className="text-[#00B7DD] text-[30px]" />
                120+
              </div>
              <span className="font-bold text-[25px]">Projects Done</span>
            </div>
          </div>
        </div>

        <div className="mt-5 lg:w-[80%]">
          <EmblaCarousel2 />
        </div>
      </section>
    </>
  );
}

export default Features