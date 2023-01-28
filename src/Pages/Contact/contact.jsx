import ContactHead from "../../Components/Contact/ContactHead/contactH";
import NavBar from "../../Components/NavBar";
import "./contact.css";
import ContactB from "./contactB/contactb";
import Footer from "../../Components/Footer/footer";
const Contact = () => {
  return (
    <div>
      <NavBar />
      <ContactHead />
      <ContactB />
      <Footer />
    </div>
  );
};

export default Contact;
