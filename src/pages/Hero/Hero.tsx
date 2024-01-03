
import { EmblaCarousel } from "../../components/carousel/EmblaCarousel";


function Hero() {
    return (
      <>
        <section className="h-[80vh] flex flex-col justify-center  items-center">
          <EmblaCarousel />
          <div className="flex flex-col justify-center items-center gap-10 px-5">
            <h1 className="text-[30px] text-white font-extrabold text-center">
              Transform Your Space with Our Premium Paints and Expert Painting
              Services
            </h1>
            <p className="text-white text-center">
              Elevate your home or office with a splash of color from our
              high-quality paints. We go beyond selling paints - providing
              professional painting services and a range of accessories to bring
              your vision to life
            </p>
            <div className="flex gap-5">
              <button className="bg-[#365486] hover:border hover:bg-transparent text-white px-10 py-2 rounded transition-all duration-300">
                Shop now
              </button>
              <button className="text-white hover:bg-[#365486] hover:border-none border px-4 py-2 rounded transition-all duration-300">
                Request Service
              </button>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero