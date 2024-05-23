import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import vegetableImg from "../../assets/vegetable.svg";
import addedBackgroundImg from "../../assets/addedBackgroundImg.svg";
import addedImg from "../../assets/addedImg.svg";
import "./Added.scss";

const Added = () => {
  return (
    <div className="recently-added">
      <div className="recently-added__content">
        <span className="recently-added__section-name">Recently Added</span>
        <h1 className="recently-added__title">
          Sushi Samurai <img src={vegetableImg} alt="" /> <br />
          Salmorn Cheese
        </h1>
        <p className="recently-added__text">
          Take a look at what’s new . And do not depreve yourself of a good
          meal, enjoy and be happy.
        </p>
        <button className="recently-added__button">
          Order Now <ArrowForwardIcon className="recently-added__arrow-svg" />
        </button>
      </div>
      <img src={addedImg} alt="" />
      <img
        src={addedBackgroundImg}
        alt=""
        className="recently-added__background-img-1"
      />
    </div>
  );
};

export default Added;
