interface art {
  image: string;
  hot?: boolean;
  sold?: boolean;
  title: string;
  price: string;
}

interface prop {
  name: string;
  props: string[];
}

const Arts_: art[] = [
  {
    image: "/bond.png",
    hot: true,
    title: "bond",
    price: "225.5",
  },
  {
    image: "/bond.png",
    hot: true,
    title: "bond",
    price: "225.5",
  },
  {
    image: "/bond.png",
    sold: true,
    title: "bond",
    price: "225.5",
  },
  {
    image: "/bond.png",
    title: "bond",
    price: "225.5",
  },
  {
    image: "/bond.png",
    title: "bond",
    price: "225.5",
  },
  {
    image: "/bond.png",
    title: "bond",
    price: "225.5",
  },
  {
    image: "/bond.png",
    title: "bond",
    price: "225.5",
  },
  {
    image: "/bond.png",
    title: "bond",
    price: "225.5",
  },
  {
    image: "/bond.png",
    title: "bond",
    price: "225.5",
  },
  {
    image: "/bond.png",
    title: "bond",
    price: "225.5",
  },
  {
    image: "/bond.png",
    title: "bond",
    price: "225.5",
  },
  {
    image: "/bond.png",
    title: "bond",
    price: "225.5",
  },
];

export const artTypes: prop[] = [
  {
    name: "style",
    props: [
      "Oil painting",
      "Fresco",
      "still life",
      "action painting",
      "landscape",
      "encaustic",
      "expressionism",
      "surrealism",
      "cubism",
      "abstract",
      "portrait",
      "divisionism",
      "modernism",
    ],
  },
  {
    name: "type",
    props: ["historical", "religious", "Allegory", "Renaissance", "Baroque"],
  },
  {
    name: "location",
    props: [
      "Oil painting",
      "Fresco",
      "still life",
      "action painting",
      "landscape",
      "encaustic",
      "expressionism",
      "surrealism",
      "cubism",
      "abstract",
      "portrait",
      "divisionism",
      "modernism",
    ],
  },
];
export const shopBy: prop[] = [
  {
    name: "artists",
    props: ["Picasso", "Van Gough", "Allen", "Mona", "Da Vinci"],
  },
  {
    name: "SUBCATEGORY",
    props: ["Fauvism", "Expressionism", "Cubism", "Constructivism", "Futurism"],
  },
  {
    name: "SIZES",
    props: ["10” x 8”", "20” x 16”", "20” x 16”", "12” x 12”", "36” x 12”"],
  },
];

export default Arts_;
