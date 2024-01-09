import { Link } from "react-router-dom";
import { MyData } from "./ServiceData";
import { AiOutlineArrowRight } from "react-icons/ai";
function Services() {
 


  return (
    <section className="bg-white p-5 pt-24">
      <div className="md:w-[50%]">
        <div className="flex  gap-5 ">
          <div className="w-[10px] h-[160px] bg-[#00B7DD]"></div>
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
        {MyData?.map((card) => (
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
  );
}

export default Services;
