import { nanoid } from "nanoid";
import Products2 from "../assets/img/Products2.png";
import Products3 from "../assets/img/Products3.png";
import Products4 from "../assets/img/Products4.png";
import Products5 from "../assets/img/Products5.png";
export const ProductData2 = [
  {
    img: Products2,
    category: "Vegetable",
    name: "Mung Bean",
    originalPrice: "$20.00",
    currentPrice: "$11.00",
    rating: "★★★★★",
    id: nanoid(),
  },
  {
    img: Products3,
    category: "Vegetable",
    name: "Brown Hazelnut",
    originalPrice: "$20.00",
    currentPrice: "$12.00",
    rating: "★★★★★",
    id: nanoid(),
  },
  {
    img: Products4,
    category: "Vegetable",
    name: "Onion",
    originalPrice: "$20.00",
    currentPrice: "$17.00",
    rating: "★★★★★",
    id: nanoid(),
  },
  {
    img: Products5,
    category: "Vegetable",
    name: "Cabbage",
    originalPrice: "$20.00",
    currentPrice: "$17.00",
    rating: "★★★★★",
    id: nanoid(),
  },
];
