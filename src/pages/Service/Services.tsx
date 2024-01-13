
import { Link } from "react-router-dom";
import { MyData } from "./ServiceData";


function Services() {
 


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
          <h2 className="font-extrabold md:text-[40px] text-[30px]">Our Services</h2>
          <ul className="flex items-center justify-center space-x-2 mt-5">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <span>/</span>
            <li>
              <Link to="aboutus" className=" text-[#00B7DD]">
                service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="bg-white p-5 md:p-16 lg:p-20  pt-24">
        <div className="flex flex-col lg:flex-row items-start  lg:items-end gap-10">
          <div className="flex  gap-5 ">
            <div className="w-[7px] h-[110px] md:h-[70px] lg:h-[130px] bg-[#00B7DD]"></div>
            <div>
              <p className="font-bold text-gray-400">OUR SERVICES</p>
              <h2 className="font-bold lg:text-[40px] text-[30px] lg:pr-10">
                Expertise and Distinctive Company Attributes
              </h2>
            </div>
          </div>
          {/* <button className=" flex items-center justify-center gap-1 w-[150px] p-2 bg-[#00B7DD] text-white">
            <Link className=" flex items-center  gap-1" to="">
              READ MORE {""}
              <AiOutlineArrowRight />
            </Link>
          </button> */}
        </div>

        <div className="  grid md:grid-cols-3 gap-7 mt-5 ">
          {MyData?.map((card) => (
            <div
              className=" group border w-full flex flex-col justify-center items-center rounded-lg overflow-hidden shadow-md"
              key={card.id}
            >
              <img
                className="w-full h-full  object-cover"
                src={card.image}
                alt={card.name}
                loading="lazy"
              />
              <div className="bg-slate-50 p-4 group-hover:bg-[#00B7DD] transition-all duration-200 ">
                <h4 className="font-semibold my-1 text-center md:text-start group-hover:text-white ">
                  {card.name}
                </h4>
                <p className="text-gray-500 text-center text-[14px] md:text-start group-hover:text-white ">
                  {card.description}
                </p>
                {/* <Link
                className=" flex items-center justify-center gap-1 py-3 text-[#00B7DD] group-hover:text-white "
                to={card.link}
              >
                READ MORE {""}
                <AiOutlineArrowRight />
              </Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
