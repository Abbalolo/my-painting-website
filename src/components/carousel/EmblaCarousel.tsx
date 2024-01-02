// import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div
      className="embla absolute top-16 left-0 z-[-1] "
      ref={emblaRef}
    >
      <div className="embla__container ">
        <div className="embla__slide">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="paint brush "
          />
        </div>
        <div className="embla__slide">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="living room "
          />
        </div>
        <div className="embla__slide">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1578059456805-cd4809a05d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdXNlJTIwcGFpbnRpbmd8ZW58MHwxfDB8fHww"
            alt="decor "
          />
        </div>
        <div className="embla__slide">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1583275830686-0e4d5ad6b4f2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1578059456805-cd4809a05d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdXNlJTIwcGFpbnRpbmd8ZW58MHwxfDB8fHww"
            alt="decor "
          />
        </div>
      </div>
    </div>
  );
};
