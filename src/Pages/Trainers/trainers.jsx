import NavBar from "../../Components/NavBar";
import Tcontent from "../../Components/Trainers/Thead/tcontent/tcontent";
import Thead from "../../Components/Trainers/Thead/thead";
import "./trainers.css";
import Footer from "../../Components/Footer/footer";

const Trainers = () => {
  return (
    <div>
      <NavBar />
      <Thead />
      <Tcontent />
      <Footer />
    </div>
  );
};

export default Trainers;
