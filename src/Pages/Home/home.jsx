import "./home.css";
import NavBar from "../../Components/NavBar";
import Header from "../../Components/Header/header";
import Program from "../../Components/Program/program";
import Value from "../../Components/Values/values";
import FAQs from "../../Components/FAQs/faqs";
import Testimonial from "../../Components/Testimonials/testimonial";
import Footer from "../../Components/Footer/footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Program />
      <Value />
      <FAQs />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
