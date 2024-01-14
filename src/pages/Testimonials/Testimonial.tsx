import { BsCheckAll } from "react-icons/bs"; 
import { BsPeopleFill } from "react-icons/bs"; 
import { EmblaCarousel2 } from "../../components/carousel2/EmblaCarousel2";
import { Link } from "react-router-dom";

function Testimonial() {
  return (
    <>
      <div className="relative h-[300px] w-full">
        <img
          className="absolute inset-0 h-full w-full object-cover brightness-[50%]"
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjBkZXNpZ258ZW58MHwwfDB8fHwy"
          alt="Testimonial"
          loading="lazy"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
          <h2 className="font-extrabold md:text-[40px] text-[30px]">
            Testimonial
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
                Testimonial{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="bg-white p-5 pt-24 lg:flex gap-5">
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

export default Testimonial