
import ContactForm from "./Form/ContactForm";

function ContactUS() {
  return (
    <section className="relative h-full  bg-cover bg-center flex items-center justify-center p-5 lg:p-20 md:p-16  mt-16">
      {/* <EmblaCarousel3 /> */}

      <div
        className="absolute inset-0 bg-cover bg-center brightness-75 top-0 left-0 "
        style={{
          backgroundImage:
            'url("https://c0.wallpaperflare.com/preview/532/107/679/scaffold-build-up-painter-house.jpg")',
        }}
      ></div>

      <div className="relative z-10 text-white md:flex h-full gap-5">
        <div className="md:w-[100%]">
          <div className="flex  gap-5 ">
            <div className="w-[10px] h-[110px] md:h-[70px] lg:h-[80px] bg-[#00B7DD]"></div>
            <div>
              <p className="font-bold text-gray-400">OUR SERVICES</p>
              <h2 className="font-bold lg:text-[40px] md:text-[30px]">
                Expertise and Distinctive Company Attributes
              </h2>
            </div>
          </div>
          <p className="text-white leading-7 mt-5 ">
            Choose Technophilic Engr. LTD for excellence in transforming spaces
            into artful masterpieces. Our seasoned professionals specialize in
            precise painting, enchanting decorations, and personalized color
            consultations. Elevate your surroundings with our commitment to
            crafting unique experiences.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

           
export default ContactUS