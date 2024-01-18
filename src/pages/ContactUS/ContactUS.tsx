
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
              <Link to="aboutus" className=" text-[#00ABEA]">
                Contact US
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className=" h-full  bg-cover bg-center md:flex items-center justify-center  p-5 lg:p-20 md:p-16  py-10 gap-10">
        <iframe
          className="mb-10 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1821581658483!2d3.3225556749937946!3d6.624281893369943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b916e924abce7%3A0x438968b2b5f57c45!2sOlowu%20St%2C%20Ijaiye%2C%20Agege%20102212%2C%20Lagos!5e0!3m2!1sen!2sng!4v1705312640207!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0", width: "100%", height: "100vh" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="  md:flex flex-col w-full justify-center lg:items-center h-full gap-10">
          <div className="md:w-[100%]">
            <div className="flex  gap-5 ">
              <div className="w-[10px] h-[120px] md:h-[150px] lg:h-[130px] bg-[#00ABE4]"></div>
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