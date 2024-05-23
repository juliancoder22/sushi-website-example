import "./PopularDish.scss";
import storeIcon from "../../assets/store.svg";
interface PopularDishProps {
  title: string;
  price: string;
  imgSrc: string;
}

const PopularDish = ({ title, price, imgSrc }: PopularDishProps) => {
  return (
    <div className="popular-dish">
      <img src={imgSrc} alt={title} className="popular-dish__dish-img" />
      <h2 className="popular-dish__title">{title}</h2>
      <p className="popular-dish__text">Japanese dish</p>
      <span className="popular-dish__price">{price}</span>
      <img src={storeIcon} alt="" className="popular-dish__buy" />
    </div>
  );
};

export default PopularDish;
