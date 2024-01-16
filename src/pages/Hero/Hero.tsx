import { FaCircle } from "react-icons/fa"; 

import { EmblaCarousel } from "../../components/carousel/EmblaCarousel";
import { Link } from "react-router-dom";


function Hero() {
    return (
      <>
        <section className="lg:h-[100vh] h-[70vh] flex flex-col justify-center relative items-center   lg:items-start px-5 lg:px-32 ">
          <EmblaCarousel />
          <div className="flex flex-col justify-center lg:justify-start items-start  gap-5   lg:w-[80%]">
            <span className="text-white font-semibold text-[18px]">
              Welcome to Technophilic.
            </span>
            <h1 className="lg:text-[50px] text-[35px] text-white  font-extrabold text-start ">
              Transform Your Space with Our Premium Paints and Expert Painting
              Services
            </h1>

            <div className="flex items-center gap-3 text-white">
              Commercial
              <span className="text-[#00ABE4]">
                <FaCircle />
              </span>
              Residential
              <span className="text-[#00ABE4]">
                <FaCircle />
              </span>
              Industrial
            </div>

            <div className="flex gap-5 mt-2">
              <Link to="/aboutus">
                <button className="text-white bg-[#00ABE4]  px-5 py-2 transition-all duration-300 rounded">
                  Learn More
                </button>
              </Link>
              <Link to="/appointment">
                <button className="border border-[#00ABE4] hover:bg-[#00ABE4] hover:text-white text-[#00ABE4]  px-5 py-2 transition-all duration-300 rounded">
                  Request Service
                </button>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero