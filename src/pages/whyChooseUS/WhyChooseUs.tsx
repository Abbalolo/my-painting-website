import { BiCheckDouble } from "react-icons/bi"; 

function WhyChooseUs() {
  return (
    <section className="bg-white md:flex-row flex justify-center items-center flex-col gap-20 p-5">
      <div className="md:w-[50%]">
        <div className="flex items-center gap-5 ">
          <div className="w-[20px] h-[160px] bg-[#00B7DD]"></div>
          <div>
            <p className="font-bold text-gray-400">WHY CHOOSE US</p>
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

      <div className="flex flex-col gap-5">
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
    </section>
  );
}

export default WhyChooseUs