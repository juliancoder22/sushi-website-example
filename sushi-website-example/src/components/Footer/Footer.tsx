import "./Footer.scss";
import cardsImg from "../../assets/cards.svg";
import facebookSvg from "../../assets/facebook.svg";
import linkedinSvg from "../../assets/linkedIn.svg";
import youtubeSvg from "../../assets/youtube.svg";
import instagramSvg from "../../assets/instagram.svg";
import twitterSvg from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h3 className="footer__column-title">Sushi</h3>
          <p className="footer__paragraph">
            Food for the body is not enough. There must be foos for the soul.
          </p>
        </div>
        <div className="footer__column">
          <h3 className="footer__column-title">Main Menu</h3>
          <ul>
            <li className="footer__link">About</li>
            <li className="footer__link">Menus</li>
            <li className="footer__link">Offers</li>
            <li className="footer__link">Events</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__column-title">Information</h3>
          <ul>
            <li className="footer__link">Contact</li>
            <li className="footer__link">Orders & Returns</li>
            <li className="footer__link">Videos</li>
            <li className="footer__link">Reseveration</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__column-title">Address</h3>
          <p className="footer__location">Buenos Aires, Argentina.</p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__left">
          <span>Connect with us</span>
          <div className="footer__media">
            <img src={facebookSvg} alt="" />
            <img src={linkedinSvg} alt="" />
            <img src={twitterSvg} alt="" />
            <img src={youtubeSvg} alt="" />
            <img src={instagramSvg} alt="" />
          </div>
        </div>
        <div className="footer__right">
          <img src={cardsImg} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
