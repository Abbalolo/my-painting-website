
import { Link } from "react-router-dom";

import ContactUSForm from "./Form/ContactUSForm";

function ContactUS() {
  return (
    <>
      <div className="relative h-[300px] w-full ">
        <img
          className="absolute inset-0 h-full w-full object-cover brightness-[50%]"
          src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2UlMjBwYWludGluZ3xlbnwwfDB8MHx8fDI%3D"
          alt="Services"
          loading="lazy"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
          <h2 className="font-extrabold md:text-[40px] text-[30px]">
            Contact Us
          </h2>
          <ul className="flex items-center justify-center space-x-2 mt-5">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <span>/</span>
            <li>
              <Link to="aboutus" className=" text-[#00B7DD]">
                Contact US
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className=" h-full  bg-cover bg-center flex items-center justify-center p-5 lg:p-20 md:p-16  py-10">
        <div className="  md:flex justify-center lg:items-center h-full gap-5">
          <div className="md:w-[100%]">
            <div className="flex  gap-5 ">
              <div className="w-[10px] h-[120px] md:h-[190px] lg:h-[130px] bg-[#00B7DD]"></div>
              <div>
                <p className="font-bold text-gray-400">CONTACT US</p>
                <h2 className="font-bold lg:text-[40px] text-[30px]">
                  Expertise and Distinctive Company Attributes
                </h2>
              </div>
            </div>
            <p className=" leading-7 mt-5 text-gray-400 text-[14px] md:text-[16px]">
              Choose Technophilic Engr. LTD for excellence in transforming
              spaces into artful masterpieces. Our seasoned professionals
              specialize in precise painting, enchanting decorations, and
              personalized color consultations. Elevate your surroundings with
              our commitment to crafting unique experiences.
            </p>
          </div>
          <ContactUSForm />
        </div>
      </section>
    </>
  );
}

           
export default ContactUS