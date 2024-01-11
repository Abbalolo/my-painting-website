import paint from "../../assets/paint.jpg"

import services from "../../assets/services.jpg"

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
    image:
      services,
    description:
      "Get expert painting services with a variety of paints, primers, and top-quality tools for a professional finish.",
    link: "service",
  },
  {
    id: 3,
    name: "Accessories and Tools",
    image:
      "https://images.unsplash.com/photo-1599388164241-8494a6c05f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhaW50JTIwYnJ1c2h8ZW58MHwwfDB8fHwy",
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
      "https://images.unsplash.com/photo-1581079289196-67865ea83118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sb3IlMjBjaGFydHxlbnwwfDB8MHx8fDI%3D",
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
