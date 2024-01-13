
import { Link } from "react-router-dom";


import Hero from "../Hero/Hero"
import aboutimage from "../../assets/aboutimage.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { services } from "../About us/AboutUsData";
import { MyData } from "../Service/ServiceData";
import { EmblaCarousel2 } from "../../components/carousel2/EmblaCarousel2";
import { BsCheckAll, BsPeopleFill } from "react-icons/bs";
import ContactUS from "../ContactUS/ContactUS";
import { BiCheckDouble } from "react-icons/bi";


function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Hero />

      <section className="bg-white md:flex-row flex justify-center  flex-col gap-20 p-5 lg:py-20 pt-24">
        <div>
          <img
            className="h-full md:h-[400px] lg:h-[500px] object-cover w-full"
            src="https://c1.wallpaperflare.com/preview/766/245/233/painter-painting-employee-building.jpg"
            alt="painter painting wall"
            loading="lazy"
          />
        </div>

        <div className="md:w-[50%]">
          <div className="flex gap-5 ">
            <div className="w-[15px] h-[165px] md:h-[200px] lg:h-[190px] bg-[#00B7DD]"></div>
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
          loading="lazy"
        />
        {/* <button className=" bg-[#00B7DD] text-white p-2 w-[130px] mt-5">
        <Link className="flex items-center gap-2" to="contactUs">
          Contact US {""}
          <AiOutlineArrowRight />
        </Link>
      </button> */}
      </section>

      <section className="bg-white p-5 md:p-16 lg:px-20  ">
        <div className="flex flex-col  lg:flex-row items-start  lg:items-end gap-10">
          <div className="flex  gap-5 ">
            <div className="w-[7px] h-[120px] md:h-[70px] lg:h-[130px]  bg-[#00B7DD]"></div>
            <div>
              <p className="font-bold text-gray-400">OUR SERVICES</p>
              <h2 className="font-bold lg:text-[40px] text-[30px] lg:pr-10">
                Expertise and Distinctive Company Attributes
              </h2>
            </div>
          </div>
          <button className=" flex items-center justify-center gap-1 w-[150px] p-2 bg-[#00B7DD] text-white">
            <Link className=" flex items-center  gap-1" to="">
              READ MORE {""}
              <AiOutlineArrowRight />
            </Link>
          </button>
        </div>

        <div className="  grid md:grid-cols-3  gap-7 mt-5 ">
          {MyData?.map((card) => (
            <div
              className=" group border w-full flex flex-col justify-center items-center rounded-lg overflow-hidden shadow-md"
              key={card.id}
            >
              <img
                className="w-full h-full object-cover"
                src={card.image}
                alt={card.name}
                loading="lazy"
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

      <ContactUS />

      <section className="bg-white p-5  lg:flex gap-10 md:p-16 lg:px-20 ">
        <div>
          <div className="">
            <div className="flex  gap-5 ">
              <div className="w-[5px] h-[120px]  md:h-[110px] lg:h-[70px] bg-[#00B7DD]"></div>
              <div>
                <p className="font-bold text-gray-400">TESTIMONIAL</p>
                <h2 className="font-bold lg:text-[40px] text-[30px]">
                  What Our Happy Clients Say!
                </h2>
              </div>
            </div>
            <p className="text-gray-500 leading-7 mt-5 ">
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
    </div>
  );
}

export default Home