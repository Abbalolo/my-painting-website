// import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import image1 from "../../assets/IMG_20240107_185810_822.jpg"
import image2 from "../../assets/IMG_20240107_185937_034.jpg"
import image3 from "../../assets/IMG_20240107_185941_000.jpg"
import image4 from "../../assets/IMG_20240107_190048_278.jpg"
import image5 from "../../assets/IMG_20240107_190154_199.jpg"
import image6 from "../../assets/IMG_20240107_190225_496.jpg"

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla absolute top-16 left-0 z-[-1] " ref={emblaRef}>
      <div className="embla__container ">
        <div className="embla__slide">
          <img
            className="w-full h-full object-cover"
            src={image2}
            alt="paint bucket "
          />
        </div>
        <div className="embla__slide">
          <img
            className="w-full h-full object-cover"
            src={image3}
            alt="paint bucket 2  "
          />
        </div>
        <div className="embla__slide">
          <img
            className="w-full h-full object-cover"
            src={image1}
            alt="decor living room "
          />
        </div>
        <div className="embla__slide">
          <img
            className="w-full h-full object-cover"
            src={image4}
            alt="decor living room 2"
          />
        </div>
        <div className="embla__slide">
          <img
            className="w-full h-full object-cover"
            src={image5}
            alt="decor "
          />
        </div>
        <div className="embla__slide">
          <img
            className="w-full h-full object-cover"
            src={image6}
            alt="pop decor "
          />
        </div>
      </div>
    </div>
  );
};
