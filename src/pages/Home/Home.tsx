
import { Link } from "react-router-dom";


import Hero from "../Hero/Hero"
import Testimonial from "../Testimonials/Testimonial";
import WhyChooseUs from "../whyChooseUS/WhyChooseUs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { services } from "../About us/AboutUsData";
import { MyData } from "../Service/ServiceData";


function Home() {
  return (
    <div>
      <Hero />

      <section className="bg-white md:flex-row flex justify-center  flex-col gap-20 p-5 lg:py-20 pt-24">
        <div>
          <img
            className="h-full md:h-[400px] lg:h-[600px] object-cover w-full"
            src="https://c1.wallpaperflare.com/preview/766/245/233/painter-painting-employee-building.jpg"
            alt="painter painting wall"
          />
        </div>

        <div className="md:w-[50%]">
          <div className="flex gap-5 ">
            <div className="w-[20px] h-[160px] md:h-[200px] lg:h-[110px] bg-[#00B7DD]"></div>
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
          <button className="flex items-center gap-1 bg-[#00B7DD] text-white p-2 my-5">
            <Link className="flex items-center gap-2" to="aboutus">
              READ MORE {""}
              <AiOutlineArrowRight />
            </Link>
          </button>
        </div>
      </section>
      <div className="bg-white grid lg:grid-cols-4 md:grid-cols-2 relative">
        {services?.slice(0, 4).map((card, index) => (
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

      <WhyChooseUs />

      <section className="bg-white p-5 pt-24">
        <div className="">
          <div className="flex  gap-5 ">
            <div className="w-[10px] h-[160px] md:h-[200px] lg:h-[110px] bg-[#00B7DD]"></div>
            <div>
              <p className="font-bold text-gray-400">OUR SERVICES</p>
              <h2 className="font-bold text-[30px]">
                Expertise and Distinctive Company Attributes
              </h2>
            </div>
          </div>
          <p className="text-gray-500 leading-7 mt-5 ">
            Choose Technophilic Engr. LTD for excellence in transforming spaces
            into artful masterpieces. Our seasoned professionals specialize in
            precise painting, enchanting decorations, and personalized color
            consultations. Elevate your surroundings with our commitment to
            crafting unique experiences.
          </p>
        </div>

        <div className="  grid md:grid-cols-3 lg:grid-cols-4  gap-7 mt-5 ">
          {MyData?.slice(0, 4).map((card) => (
            <div
              className=" group border w-full flex flex-col justify-center items-center rounded-lg overflow-hidden shadow-md"
              key={card.id}
            >
              <img
                className="w-full h-[300px] md:h-[100%]  object-cover"
                src={card.image}
                alt={card.name}
              />
              <div className="p-4 group-hover:bg-[#00B7DD] transition-all duration-200 ">
                <h4 className="font-semibold my-1 text-center md:text-start group-hover:text-white ">
                  {card.name}
                </h4>
                <p className="text-gray-500 text-center md:text-start group-hover:text-white ">
                  {card.description}
                </p>
                <Link
                  className=" flex items-center justify-center gap-1 py-3 text-[#00B7DD] group-hover:text-white "
                  to={card.link}
                >
                  READ MORE {""}
                  <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonial />
    </div>
  );
}

export default Home