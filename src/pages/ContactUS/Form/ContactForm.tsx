import { useState } from "react";


interface Input {
  id: number;
  name: string;
  type: string;
}

const myInputs: Input[] = [
  {
    id: 1,
    name: "Your Name",
    type: "text",
  },
  {
    id: 2,
    name: "Your Email",
    type: "text",
  },
  {
    id: 3,
    name: "Your Mobile",
    type: "text",
  },
  {
    id: 4,
    name: "Service Type",
    type: "text",
  },
  {
    id: 5,
    name: "Message",
    type: "text",
  },
];

function ContactForm() {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
   
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
     console.log({ inputValues });
  
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 w-full">
      <div className="grid md:grid-cols-2 gap-3">
        {myInputs?.slice(0, 4).map((input) => (
          <div
            className="focus-within:ring ring-[#00b8dd68] border-none w-full bg-[#182333] flex flex-col group relative h-[55px] overflow-hidden "
            key={input.id}
          >
            <label
              htmlFor={input.name}
              className={`${
                inputValues[input.name]
                  ? "hidden text-gray-500"
                  : "translate-y-[6px]  text-sm text-gray-500"
              } text-base transition-all duration-300 group-focus-within:text-xs group-focus-within:translate-y-0 p-2`}
            >
              {input.name}
            </label>
            <input
              className="bg-transparent outline-none absolute pt-3 pl-2 w-full h-full text-gray-400"
              type={input.type}
              name={input.name}
              id={input.name}
              onChange={(e) => handleInputChange(input.name, e.target.value)}
              required
            />
          </div>
        ))}
      </div>
      {myInputs?.slice(4).map((input) => (
        <div
          key={input.id}
          className="focus-within:ring ring-[#00b8dd68] border-none w-full bg-[#182333] flex flex-col group relative h-28 overflow-hidden mt-3"
        >
          <label
            htmlFor={input.name}
            className={`${
              inputValues[input.name]
                ? "hidden text-gray-500"
                : "translate-y-[6px]  text-sm text-gray-500"
            } text-base transition-all duration-300 group-focus-within:text-xs group-focus-within:translate-y-0 p-2`}
          >
            {input.name}
          </label>
          <textarea
            name={input.name}
            className="bg-transparent outline-none absolute pt-3 w-full h-full text-gray-400 pl-2"
            onChange={(e) => handleInputChange(input.name, e.target.value)}
            required
          ></textarea>
        </div>
      ))}
      <button
        className="bg-[#00ABE4] rounded text-[15px] p-3 mt-3"
        type="submit"
      >
        Send Us Message
      </button>
    </form>
  );
}

export default ContactForm;
