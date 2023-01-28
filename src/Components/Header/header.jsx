import "./header.css";
import { Link } from "react-router-dom";
import landing_bg from "../../Assets/bg_image-removebg-preview.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="sub_header">
          <div className="header__content">
            <span>#100DaysOfWorkOut</span>
            <h2>Join The Legends Of The Fitness World</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              eos inventore alias esse sit distinctio iure laborum dicta
              doloribus?
            </p>
          </div>
          <div className="header__link">
            <Link className="btn">Get Started</Link>
          </div>
        </div>
        <div className="header__image">
          <div className="header__position">
            <img src={landing_bg} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
