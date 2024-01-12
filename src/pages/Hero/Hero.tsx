
import { EmblaCarousel } from "../../components/carousel/EmblaCarousel";


function Hero() {
    return (
      <>
        <section className="h-[100vh] flex flex-col justify-center relative items-center  lg:items-start px-5 lg:px-32 lg:pt-20">
          <EmblaCarousel />
          <div className="flex flex-col justify-center lg:justify-start items-start  gap-5   lg:w-[80%]">
            <span className="text-white font-semibold ">Welcome to Technophilic.</span>
            <h1 className="lg:text-[50px] text-[40px] text-white  font-extrabold text-start ">
              Transform Your Space with Our Premium Paints and Expert Painting
              Services
            </h1>
           
            <div className="flex gap-5">
             
              <button className="text-white bg-[#00B7DD]  px-5 py-3 transition-all duration-300">
                Request Service
              </button>
              <button className="text-white bg-[#00B7DD]  px-5 py-3 transition-all duration-300">
                Request Service
              </button>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero