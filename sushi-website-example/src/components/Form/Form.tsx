import formImg from "../../assets/formImg.svg";
import formBackgroundImg from "../../assets/formBackgroundImg.svg";
import vegetableImg from "../../assets/vegetable.svg";
import sendSvg from "../../assets/send.svg";
import "./Form.scss";

const Form = () => {
  return (
    <div className="form-section">
      <div className="form-section__card">
        <img src={formImg} alt="" />
        <div className="form-section__content">
          <img
            src={vegetableImg}
            alt="vegetable image"
            className="form-section__vegetable"
          />
          <span className="form-section__section-name">Newsletter</span>
          <h1 className="form-section__title">Subscribe for latest update</h1>
          <div className="form-section__input-wrapper">
            <input type="email" placeholder="Enter Email" />
            <button>
              Subscribe <img src={sendSvg} alt="" />
            </button>
          </div>
        </div>
      </div>
      <img
        src={formBackgroundImg}
        alt=""
        className="form-section__background-img-1"
      />
    </div>
  );
};

export default Form;
