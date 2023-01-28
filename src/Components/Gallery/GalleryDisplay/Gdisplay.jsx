import "./Gdisplay.css";
import GOne from "../../../Assets/gym__gallery_one.jpg";
import GTwo from "../../../Assets/gym__gallery_two.jpg";
import GThree from "../../../Assets/gym__gallery_three.jpg";
import GThirteen from "../../../Assets/gym__gallery_thirteen.avif";
import GFive from "../../../Assets/gym__gallery_five.jpg";
import GSix from "../../../Assets/gym__gallery_six.jpg";
import GSeven from "../../../Assets/gym__gallery_seven.jpg";
import GEight from "../../../Assets/gym__gallery_eight.avif";
import GNine from "../../../Assets/gym__gallery_nine.jpg";
import GTen from "../../../Assets/gym__gallery_ten.jpg";
import GEleven from "../../../Assets/gym__gallery_eleven.avif";
import GTwelwe from "../../../Assets/gym__gallery_one.jpg";

const Gdisplay = () => {
  return (
    <section className="container">
      <div className="Gdisplay">
        <img src={GOne} alt="" />
        <img src={GTwo} alt="" />
        <img src={GThree} alt="" />
        <img src={GThirteen} alt="" />
        <img src={GFive} alt="" />
        <img src={GSix} alt="" />
        <img src={GSeven} alt="" />
        <img src={GEight} alt="" />
        <img src={GNine} alt="" />
        <img src={GTen} alt="" />
        <img src={GEleven} alt="" />
        <img src={GTwelwe} alt="" />
      </div>
    </section>
  );
};

export default Gdisplay;
