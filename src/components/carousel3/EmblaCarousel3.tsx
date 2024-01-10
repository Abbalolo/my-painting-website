
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";



export const EmblaCarousel3 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);



  return (
    <div className="overflow-hidden  brightness-75 " ref={emblaRef}>
      <div className="embla__container ">
        <div className="embla__slide flex flex-col gap-3 ">
          <img
            className="w-full h-screen md:h-full object-cover "
            src="https://c0.wallpaperflare.com/preview/532/107/679/scaffold-build-up-painter-house.jpg"
            alt="customer photo"
          />
        </div>
      </div>
    </div>
  );
};
