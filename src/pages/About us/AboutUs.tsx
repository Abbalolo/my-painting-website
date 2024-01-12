import { AiOutlineArrowRight } from "react-icons/ai"; 
import { Link } from "react-router-dom";


import {services} from "./AboutUsData"

function AboutUs() {


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

      <section className="bg-white md:flex-row flex justify-center  flex-col gap-20 p-5 lg:py-20 pt-24">
        <div>
          <img
            className="h-full md:h-[400px] lg:h-[500px] object-cover w-full"
            src="https://c1.wallpaperflare.com/preview/766/245/233/painter-painting-employee-building.jpg"
            alt="painter painting wall"
          />
        </div>

        <div className="md:w-[50%]">
          <div className="flex gap-5 ">
            <div className="w-[15px] h-[160px] lg:h-[190px] md:h-[100px] bg-[#00B7DD]"></div>
            <div>
              <p className="font-bold text-gray-400">ABOUT US</p>
              <h2 className="font-bold lg:text-[40px] text-[30px]">
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
          <button className="flex items-center gap-1 bg-[#00B7DD] text-white p-2 my-5">
            <Link className="flex items-center gap-2" to="/aboutus">
              READ MORE {""}
              <AiOutlineArrowRight />
            </Link>
          </button>
        </div>
      </section>
      <div className="bg-white grid md:grid-cols-3 relative">
        {services?.map((card, index) => (
          <div
            className="relative w-full  "
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            key={index}
          >
            <div className="background h-full pt-20 p-5 pb-10 flex flex-col gap-5 transition-transform origin-top duration-500 ">
              <h2 className="font-extrabold text-[100px] text-transparent">
                <span style={{ WebkitTextStroke: "3px #00B7DD" }}>
                  {card.number}
                </span>
              </h2>

              <h3 className="text-white font-bold text-[20px] ">{card.name}</h3>
              <p className="text-white">{card.description}</p>
              {/* <Link
                className="flex items-center gap-1 text-white"
                to={card.link}
              >
                READ MORE {""}
                <AiOutlineArrowRight />
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutUs