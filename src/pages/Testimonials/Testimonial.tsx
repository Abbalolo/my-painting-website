import { BsCheckAll } from "react-icons/bs"; 
import { BsPeopleFill } from "react-icons/bs"; 
import { EmblaCarousel2 } from "../../components/carousel2/EmblaCarousel2";

function Testimonial() {
  return (
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
          <p className="text-gray-500 leading-7 mt-5 ">
            Technophilic Engr. LTD transformed our space into a masterpiece with
            precise painting, enchanting decorations, and personalized color
            consultations. Elevate your surroundings with their unmatched
            expertise!
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
  );
}

export default Testimonial