
import ContactForm from './Form/ContactForm';


function Appointment() {
  return (
    <section className="relative h-full lg:h-screen  bg-cover bg-center flex items-center justify-center p-5 lg:p-20 md:p-16  py-20">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75 top-0 left-0 "
        style={{
          backgroundImage:
            'url("https://c0.wallpaperflare.com/preview/532/107/679/scaffold-build-up-painter-house.jpg")',
        }}
      ></div>

      <div className="relative z-10 text-white md:flex justify-center lg:items-center h-full gap-5">
        <div className="md:w-[100%]">
          <div className="flex  gap-5 ">
            <div className="w-[10px] h-[150px] md:h-[190px] lg:h-[190px] bg-[#00ABE4]"></div>
            <div>
              <p className="font-bold text-white">APPOINTMENT</p>
              <h2 className="font-bold lg:text-[40px] text-[30px]">
                Let us elevate your space with our expertise and attention to
                detail.
              </h2>
            </div>
          </div>
          <p className="text-white text-[14px] md:text-[16px] md leading-7 mt-5 ">
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

export default Appointment