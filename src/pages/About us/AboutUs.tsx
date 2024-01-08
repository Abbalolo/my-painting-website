import { AiOutlineArrowRight } from "react-icons/ai"; 
import { Link } from "react-router-dom";
import aboutimage from "../../assets/aboutimage.png"

import {services} from "./AboutUsData"

function AboutUs() {


  return (
    <>
      <section className="bg-white md:flex-row flex justify-center items-center flex-col gap-20 p-5">
        <img
          className="object-contain  md:w-[400px] h-[100%]"
          src={aboutimage}
          alt="man with paint brush"
        />

        <div className="md:w-[50%]">
          <div className="flex items-center gap-5 ">
            <div className="w-[20px] h-[160px] bg-[#00B7DD]"></div>
            <div>
              <p className="font-bold text-gray-400">ABOUT US</p>
              <h2 className="font-bold text-[30px]">
                Exclusive Solutions for Residential and Industrial Paint Sales
                and Services
              </h2>
            </div>
          </div>
          <p className="text-gray-500 leading-7 mt-5 ">
            Welcome to Technophilic Engr. LTD, where painting meets perfection!
            Our seasoned professionals specialize in transforming residential
            and industrial spaces into artful masterpieces. From precise
            painting and enchanting decorations to personalized custom color
            consultations, we bring creativity and expertise to every project.
            Elevate your space with Technophilic Engr. LTD where we go beyond
            walls to craft unique experiences.
          </p>
        </div>
      </section>
      <div className="bg-white grid relative">
        {services?.map((card, index) => (
          <div
            className="relative w-full "
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            key={index}
          >
            {/* <div className=" absolute top-0 left-0 z-[1]">
              <img src={card.image} alt="" />
            </div> */}
            
            <div className="background p-10 flex flex-col gap-5">
              <h2 className="font-extrabold text-[50px] text-transparent">
                <span style={{ WebkitTextStroke: "3px #00B7DD" }}>
                  {card.number}
                </span>
              </h2>

              <h3 className="text-white font-bold text-[20px] ">{card.name}</h3>
              <p className="text-white">{card.description}</p>
              <Link
                className="flex items-center gap-1 text-white"
                to={card.link}
              >
                READ MORE {""}
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutUs