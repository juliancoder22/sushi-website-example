import "./Hero.scss";
import heroImg from "../../assets/heroImg.svg";
import heroSubtitleImg from "../../assets/heroSubtitleImg.svg";
import heroBackgroundImg1 from "../../assets/heroImgBackground-1.svg";
import heroBackgroundImg2 from "../../assets/heroImgBackground-2.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Enjoy Delicious</h1>
        <h2 className="hero__subtitle">
          <img src={heroSubtitleImg} alt="" /> Sushi Food
        </h2>
        <p className="hero__text">
          Enjoy a good dinner with the best dishes in the restourant and improve
          your day.
        </p>
        <button className="hero__button">
          Order Now <ArrowForwardIcon className="hero__arrow-svg" />
        </button>
      </div>

      <img src={heroImg} alt="" />

      <img src={heroBackgroundImg1} className="hero__background-img-1" />
      <img src={heroBackgroundImg2} className="hero__background-img-2" />
    </div>
  );
};

export default Hero;
