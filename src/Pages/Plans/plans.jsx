import NavBar from "../../Components/NavBar";
import Pcontent from "../../Components/Plans/pcontent/pcontent";
import Phead from "../../Components/Plans/Phead/phead";
import Footer from "../../Components/Footer/footer";
import "./plans.css";

const Plans = () => {
  return (
    <div>
      <NavBar />
      <Phead />
      <Pcontent />
      <Footer />
    </div>
  );
};

export default Plans;
