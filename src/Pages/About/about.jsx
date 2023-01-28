import Aheader from "../../Components/About/AHeader/aheader";
import Astory from "../../Components/About/AHeader/AStory/astory";
import Footer from "../../Components/Footer/footer";
import NavBar from "../../Components/NavBar";
import "./about.css";

const About = () => {
  return (
    <div>
      <NavBar />
      <Aheader />
      <Astory />
      <Footer />
    </div>
  );
};

export default About;
