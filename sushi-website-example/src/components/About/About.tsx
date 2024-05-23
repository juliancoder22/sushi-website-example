import "./About.scss";
import aboutImg from "../../assets/aboutImg.svg";
import aboutBackgroundImg from "../../assets/aboutBackgroundImg.svg";

const About = () => {
  return (
    <div className="about">
      <img src={aboutImg} alt="" className="about__img" />
      <div className="about__content">
        <span className="about__section-name">About us</span>
        <h1 className="about__title">We Provide Healthy Food</h1>
        <p className="about__text">
          Food comes to us from our relatives whether they have wings or roots .
          This is how we consider food. It also has a culture. It has a history
          that passes from generation to genneration.
        </p>
      </div>

      <img src={aboutBackgroundImg} className="about__background-img" />
    </div>
  );
};

export default About;
