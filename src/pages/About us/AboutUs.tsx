import { AiOutlineArrowRight } from "react-icons/ai"; 
import { Link } from "react-router-dom";
import aboutimage from "../../assets/aboutimage.png"

function AboutUs() {

    interface myService {
        number: string,
        name: string,
        image: string,
        description: string,
        link: string
    }

    const services: myService[] = [
      {
        number: "01",
        name: "Paint stocks",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeu2BvrAtMicz2XghvYlwvfLrshZvSzTeY2Q&usqp=CAU",
        description:
          "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
        link: "#",
      },
      {
        number: "02",
        name: "Paint Service",
        image: "",
        description:
          "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
        link: "#",
      },
      {
        number: "03",
        name: "Custom paint colour center",
        image: "",
        description:
          "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
        link: "#",
      },
      {
        number: "04",
        name: "Interior / exterior design",
        image: "",
        description:
          "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
        link: "#",
      },
      {
        number: "05",
        name: "POP installation",
        image: "",
        description:
          "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
        link: "#",
      },
      {
        number: "06",
        name: "Wall decoration",
        image: "",
        description:
          "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
        link: "#",
      },
      {
        number: "07",
        name: "Fixing paint correction",
        image: "",
        description:
          "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
        link: "#",
      },
    ];
  return (
    <>
      <section className="bg-white md:flex-row flex justify-center items-center flex-col gap-20 p-5">
        <img
          className="object-contain w-[100%] md:w-[400px] h-[100%]"
          src={aboutimage}
          alt="man with paint brush"
        />

        <div className="md:w-[50%]">
          <div className="flex items-center gap-5 ">
            <div className="w-[20px] h-[160px] bg-blue-500"></div>
            <div>
              <p className="font-bold text-gray-400">ABOUT US</p>
              <h2 className="font-bold text-[30px]">
                Exclusive Solutions for Residential and Industrial Paint Sales
                and Services
              </h2>
            </div>
          </div>
          <p className="text-gray-500 leading-7 mt-5 ">
            Welcome to Technophilic Engr. LTD, where painting meets perfection!
            Our seasoned professionals specialize in transforming residential
            and industrial spaces into artful masterpieces. From precise
            painting and enchanting decorations to personalized custom color
            consultations, we bring creativity and expertise to every project.
            Elevate your space with Technophilic Engr. LTD where we go beyond
            walls to craft unique experiences.
          </p>
        </div>
      </section>
      <div className="bg-white grid relative">
        {services?.map((card, index) => (
          <div
            className="relative w-full"
            style={{
              backgroundImage: `url(${card.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              backgroundSize:"cover"
            }}
            key={index}
          >
            {/* <div className=" absolute top-0 left-0 z-[1]">
              <img src={card.image} alt="" />
            </div> */}

            <div className="">
              <h2 className="font-extrabold text-[50px] text-white">
                <span style={{ WebkitTextStroke: "2px black" }}>
                  {card.number}
                </span>
              </h2>

              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <Link className="flex items-center gap-1" to={card.link}>
                READ MORE {""}
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutUs