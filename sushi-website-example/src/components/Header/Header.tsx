import "./Header.scss";
import headerIcon from "../../assets/headerIcon.svg";

const Header = () => {
  return (
    <header className="header">
      <span className="header__title">
        <img src={headerIcon} alt="" /> Sushi
      </span>
      <nav className="header__nav">
        <a href="#" className="header__link">
          Home
        </a>
        <a href="#" className="header__link">
          About Us
        </a>
        <a href="#" className="header__link">
          Popular
        </a>
        <a href="#" className="header__link">
          Recently
        </a>
      </nav>
    </header>
  );
};

export default Header;
