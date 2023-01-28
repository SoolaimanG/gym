import "./contactb.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
const ContactB = () => {
  return (
    <section className="container contact_icon">
      <a className="icon__svg icon____svg" href="">
        <IoLogoWhatsapp />
      </a>
      <a className="icon__svg icon____svg" href="">
        <GrMail />
      </a>
      <a className="icon__svg icon____svg" href="">
        <BsMessenger />
      </a>
    </section>
  );
};

export default ContactB;
