import { MyData } from "./ServiceData";
function Services() {
 


  return (
    <section className="bg-white p-5">
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

      <div className="  flex flex-col justify-center items-center gap-7 mt-5 ">
        {MyData?.map((card) => (
          <div
            className="border w-full flex flex-col justify-center items-center rounded-lg overflow-hidden shadow-md"
            key={card.id}
          >
            <img
              className="w-full h-[300px] object-cover"
              src={card.image}
              alt={card.name}
            />
            <div className="p-3">
              <h4 className="font-semibold my-1">{card.name}</h4>
              <p className="text-gray-500">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
