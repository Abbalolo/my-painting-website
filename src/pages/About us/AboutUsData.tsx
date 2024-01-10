import paintStock from "../../assets/Paintstock.jpg"
import interior from "../../assets/Interior.jpg"
import walldecor from "../../assets/wall.jpg"

interface myService {
  number: string;
  name: string;
  image: string;
  description: string;
  link: string;
}

export const services: myService[] = [
  {
    number: "01",
    name: "Paint stocks",
    image: paintStock,
    description:
      "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
    link: "aboutus",
  },
  {
    number: "02",
    name: "Paint Service",
    image:
      "https://media.istockphoto.com/id/1286123261/photo/home-painter-is-painting-walls-with-paint-roller-and-paints-during-renovation.webp?b=1&s=170667a&w=0&k=20&c=jRj-n9LM94ucByRaYr-UOaWApTw504Tc170xAITdamE=",
    description:
      "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
    link: "aboutus",
  },
  {
    number: "03",
    name: "Custom paint colour center",
    image:
      "https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
    link: "aboutus",
  },
  {
    number: "04",
    name: "Interior / exterior design",
    image: interior,
    description:
      "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
    link: "aboutus",
  },
  {
    number: "05",
    name: "POP installation",
    image:
      "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/false-ceiling-design/false-ceiling-design-for-bedroom-with-pop-design/false-ceiling-design-for-bedroom-with-pop-design.jpg",
    description:
      "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
    link: "aboutus",
  },
  {
    number: "06",
    name: "Wall decoration",
    image: walldecor,
    description:
      "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
    link: "aboutus",
  },
  {
    number: "07",
    name: "Fixing paint correction",
    image:
      "https://static.asianpaints.com/content/dam/apcolourcatalogue/asset/ap-revamp/design-guide/home-painting-guide/painting-service.png",
    description:
      "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
    link: "aboutus",
  },
];
