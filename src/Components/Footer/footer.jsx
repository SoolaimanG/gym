import "./footer.css";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__one">
          <h2>
            Vawu<span>Lens</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
            nihil? Minima, nihil nisi? Libero ab a eveniet impedit magnam quo
            accusantium autem harum numquam debitis.
          </p>
          <div className="footer__two">
            <a className="icon__svg icon__svg_two" href="">
              <FaLinkedinIn />
            </a>
            <a className="icon__svg icon__svg_two" href="">
              <FaFacebookF />
            </a>
            <a className="icon__svg icon__svg_two" href="">
              <FaTwitter />
            </a>
            <a className="icon__svg icon__svg_two" href="">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer__three">
          <h3>Permalinks</h3>
          <div className="footer__four">
            <Link to={"/about"}>About</Link>
            <Link to={"/plans"}>Plans</Link>
            <Link to={"/trainers"}>Trainers</Link>
            <Link to={"/blogs"}>Blog</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className="footer__five">
          <h3>insights</h3>
          <ul>
            <li>Blogs</li>
            <li>Case Studies</li>
            <li>Events</li>
            <li>Communities</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
