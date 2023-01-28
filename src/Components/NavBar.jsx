import { Link, NavLink } from "react-router-dom";
import "./navBar.css";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

const NavBar = () => {
  const [show_nav, setShow_nav] = useState(false);
  const [iconShow, setIconShow] = useState(<HiOutlineMenu />);

  return (
    <nav>
      <div className="container nav__conatiner">
        <h2>
          <Link to={"/"}>
            Vawu<span>Lens</span>
          </Link>
        </h2>
        <ul className={`nav__list ${show_nav ? "show__nav" : "hide_nav"}`}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/gallery"}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to={"/plans"}>Plans</NavLink>
          </li>
          <li>
            <NavLink to={"/trainers"}>Trainers</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        <div
          onClick={() => {
            setShow_nav(!show_nav);
            show_nav === false
              ? setIconShow(<GrClose />)
              : setIconShow(<HiOutlineMenu />);
          }}
          className="SVG__icon"
        >
          {iconShow}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
