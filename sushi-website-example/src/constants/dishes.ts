import dish1 from "../assets/dish-1.svg";
import dish2 from "../assets/dish-2.svg";
import dish3 from "../assets/dish-3.svg";

interface Dish {
  title: string;
  price: string;
  imgSrc: string;
}

const dishes: Dish[] = [
  {
    title: "Onrigi",
    price: "10.99 $",
    imgSrc: dish1,
  },
  {
    title: "Spring Roll",
    price: "15.99 $",
    imgSrc: dish2,
  },
  {
    title: "Sushi Roll",
    price: "19.99 $",
    imgSrc: dish3,
  },
];

export default dishes;
