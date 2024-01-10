import paint from "../../assets/paint.jpg"
import tools from "../../assets/tools.png"
import service from "../../assets/service.jpg"

interface myCard {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
}

export const MyData: myCard[] = [
  {
    id: 1,
    name: "Paint Products",
    image: paint,
    description:
      "Discover paints in various types and colors, essential primers, sealers, and undercoats, as well as high-quality painting tools and accessories.",
    link: "service",
  },
  {
    id: 2,
    name: "Painting Services",
    image: service,
    description:
      "Get expert painting services with a variety of paints, primers, and top-quality tools for a professional finish.",
    link: "service",
  },
  {
    id: 3,
    name: "Accessories and Tools",
    image: tools,
    description:
      "Discover top-notch painting tools and accessories for all your needs.",
    link: "service",
  },
  {
    id: 6,
    name: "paint correction",
    image:
      "https://islandpaints.com/wp-content/uploads/2021/10/paint-qualities-that-work-best-for-wet-walls.jpg",
    description:
      "Discover top-notch painting tools and accessories for all your needs.",
    link: "service",
  },
  {
    id: 7,
    name: "Custom paint colour center",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-paint.jpeg.jpg",
    description:
      "Discover top-notch painting tools and accessories for all your needs.",
    link: "service",
  },
  {
    id: 8,
    name: "POP installation",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/03/05120313/8-9.jpg",
    description:
      "Discover top-notch painting tools and accessories for all your needs.",
    link: "service",
  },
  {
    id: 8,
    name: "Wall decoration",
    image:
      "https://www.nipponpaint.co.in/wp-content/uploads/2023/03/2-Geometric-Shapes-1024x576.jpg",
    description:
      "Discover top-notch painting tools and accessories for all your needs.",
    link: "service",
  },
];
