import { MdOutlineArrowForwardIos } from "react-icons/md"; 
import { MdOutlineArrowBackIosNew } from "react-icons/md"; 
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";



export const EmblaCarousel2 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();


  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="embla__container ">
        <div className="embla__slide flex flex-col gap-3">
          <img
            className="w-[100px] h-full object-cover "
            src="https://media.gettyimages.com/id/1404722078/photo/senior-black-man-with-i-voted-sticker.jpg?s=612x612&w=0&k=20&c=um7HUolKHgtThWwtypxxF4Pjkh2iAjGrPkBo7rdHqD0="
            alt="customer photo"
          />
          <p className="text-gray-500">
            Choosing Technophilic Engr. LTD for my painting needs was the best
            decision. The team's professionalism, precision, and artistic touch
            created a stunning atmosphere in my home. Thrilled with the results!
          </p>
          <div className="w-[100px] h-[10px] bg-[#00B7DD]"></div>
          <h3 className="font-semibold">Ibrahim Bello </h3>
          <p className="text-gray-500 text-[14px]"> Civil Engineer</p>
          <div className="flex items-center gap-4 my-3">
            <button
              onClick={scrollPrev}
              className="border border-[#00B7DD] hover:bg-[#00B7DD] text-[#00B7DD] hover:text-white h-[40px] w-[40px] flex items-center justify-center rounded-full"
            >
              <MdOutlineArrowBackIosNew />
            </button>
            <button
              onClick={scrollNext}
              className="border border-[#00B7DD] text-[#00B7DD] hover:text-white hover:bg-[#00B7DD]  h-[40px] w-[40px] flex items-center justify-center rounded-full"
            >
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
        <div className="embla__slide flex flex-col gap-2">
          <img
            className="w-[100px] h-full object-cover"
            src="https://media.gettyimages.com/id/1409948380/photo/business-portrait.jpg?s=612x612&w=0&k=20&c=m2ivjMl1v_eK5n-yv-NM3OqpKMy8XZ_gFOv0pih2TPk="
            alt="customer photo"
            loading="lazy"
          />
          <p className="text-gray-500">
            I'm beyond impressed with the exceptional painting service provided
            by Technophilic Engr. LTD. Their attention to detail and creativity
            transformed my space into a work of art. Highly recommended!
          </p>
          <div className="w-[100px] h-[10px] bg-[#00B7DD]"></div>
          <h3 className="font-semibold">Adeolu Ogunleye </h3>
          <p className="text-gray-500 text-[14px]">Architect</p>
          <div className="flex items-center gap-4 my-3">
            <button
              onClick={scrollPrev}
              className="border border-[#00B7DD] hover:bg-[#00B7DD] text-[#00B7DD] hover:text-white h-[40px] w-[40px] flex items-center justify-center rounded-full"
            >
              <MdOutlineArrowBackIosNew />
            </button>
            <button
              onClick={scrollNext}
              className="border border-[#00B7DD] text-[#00B7DD] hover:text-white hover:bg-[#00B7DD]  h-[40px] w-[40px] flex items-center justify-center rounded-full"
            >
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
        <div className="embla__slide flex flex-col gap-2">
          <img
            className="w-[100px] h-full object-cover "
            src="https://media.gettyimages.com/id/1409948380/photo/business-portrait.jpg?s=612x612&w=0&k=20&c=m2ivjMl1v_eK5n-yv-NM3OqpKMy8XZ_gFOv0pih2TPk="
            alt="customer photo"
            loading="lazy"
          />
          <p className="text-gray-500">
            Choosing Technophilic Engr. LTD was a game-changer for my home.
            Fatima Ahmed's expert advice on colors and the team's meticulous
            painting skills gave my space a beautiful makeover. Exceptional
            service!
          </p>
          <div className="w-[100px] h-[10px] bg-[#00B7DD]"></div>
          <h3 className="font-semibold">Funmilayo Adeyemi</h3>
          <p className="text-gray-500 text-[14px]">Interior Designer</p>
          <div className="flex items-center gap-4 my-3">
            <button className="border border-[#00B7DD] hover:bg-[#00B7DD] text-[#00B7DD] hover:text-white h-[40px] w-[40px] flex items-center justify-center rounded-full">
              <MdOutlineArrowBackIosNew />
            </button>
            <button className="border border-[#00B7DD] text-[#00B7DD] hover:text-white hover:bg-[#00B7DD]  h-[40px] w-[40px] flex items-center justify-center rounded-full">
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
        <div className="embla__slide flex flex-col gap-2">
          <img
            className="w-[100px] h-full object-cover"
            src="https://media.gettyimages.com/id/1409948380/photo/business-portrait.jpg?s=612x612&w=0&k=20&c=m2ivjMl1v_eK5n-yv-NM3OqpKMy8XZ_gFOv0pih2TPk="
            alt="customer photo"
            loading="lazy"
          />
          <p className="text-gray-500">
            Choosing Technophilic Engr. LTD was a game-changer for my home.
            Fatima Ahmed's expert advice on colors and the team's meticulous
            painting skills gave my space a beautiful makeover. Exceptional
            service!
          </p>
          <div className="w-[100px] h-[10px] bg-[#00B7DD]"></div>
          <h3 className="font-semibold">Chijioke Nwankwo</h3>
          <p className="text-gray-500 text-[14px]">IT Consultant</p>
          <div className="flex items-center gap-4 my-3">
            <button
              onClick={scrollPrev}
              className="border border-[#00B7DD] hover:bg-[#00B7DD] text-[#00B7DD] hover:text-white h-[40px] w-[40px] flex items-center justify-center rounded-full"
            >
              <MdOutlineArrowBackIosNew />
            </button>
            <button
              onClick={scrollNext}
              className="border border-[#00B7DD] text-[#00B7DD] hover:text-white hover:bg-[#00B7DD]  h-[40px] w-[40px] flex items-center justify-center rounded-full"
            >
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
