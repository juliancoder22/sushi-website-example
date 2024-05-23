import dishes from "../../constants/dishes";
import popularBackgroundImg1 from "../../assets/popularBackground-1.svg";
import popularBackgroundImg2 from "../../assets/popularBackground-2.svg";
import PopularDish from "../PopularDish/PopularDish";
import "./Popular.scss";

const Popular = () => {
  return (
    <div className="popular">
      <span className="popular__section-name">The Best Food</span>
      <h1 className="popular__title">Popular Dishes</h1>
      <div className="popular__cards">
        {dishes.map((dish, index) => (
          <PopularDish
            key={index}
            title={dish.title}
            price={dish.price}
            imgSrc={dish.imgSrc}
          />
        ))}
      </div>

      <img
        src={popularBackgroundImg1}
        alt=""
        className="popular__background-img-1"
      />
      <img
        src={popularBackgroundImg2}
        alt=""
        className="popular__background-img-2"
      />
    </div>
  );
};

export default Popular;
