
function Services() {

    interface myCard {
        id: number,
        name: string,
        image: string,
        paragraph: string[]
            
            
    }

    const MyData: myCard[] = [
      {
        id: 1,
        name: "Paint Products",
        image: "",
        paragraph: [
          "Various types and colors of paints (interior, exterior, specialty paints).",
          "Primers, sealers, and undercoats.",
          "Paintbrushes, rollers, and other painting tools.",
          "Paint additives and accessories.",
        ],
      },
      {
        id: 2,
        name: "Painting Services",
        image: "",
        paragraph: [
          "Professional painting services for homes, businesses, or other structures.",
          "Interior and exterior painting.",
          "Custom color consultations.",
          "Surface preparation and repair.",
        ],
      },
      {
        id: 3,
        name: "Accessories and Tools",
        image: "",
        paragraph: [
          "Painting equipment and tools for DIY projects.",
          "Drop cloths, painter's tape, and protective gear.",
          "Cleaning and maintenance products.",
        ],
      },
    ];
  return (
      <section className="bg-white ">
          <h2>Our Services</h2>

    </section>
  )
}

export default Services