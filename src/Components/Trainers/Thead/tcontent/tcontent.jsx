import "./tcontent.css";
import imageOne from "../../../../Assets/gym__trainers_seven.avif";
import imageTwo from "../../../../Assets/gym__trainers_ten.avif";
import imageThree from "../../../../Assets/gym__trainers_three.jpg";
import imageFour from "../../../../Assets/gym__trainers_four.jpg";
import imageFive from "../../../../Assets/gym__trainers_five.jpg";
import imageSix from "../../../../Assets/gym__trainers_six.jpg";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Tcontent = () => {
  const Trainers = [
    {
      id: 1,
      image: imageOne,
      name: "John Doe",
      work: "Aerobic Trainer",
      social1: <FaInstagram />,
      social2: <FaFacebookF />,
      social3: <FaTwitter />,
      social4: <FaLinkedinIn />,
    },
    {
      id: 2,
      image: imageTwo,
      name: "Denial Vinyo",
      work: "Speed Trainer",
      social1: <FaInstagram />,
      social2: <FaFacebookF />,
      social3: <FaTwitter />,
      social4: <FaLinkedinIn />,
    },
    {
      id: 3,
      image: imageThree,
      name: "Edem Quist",
      work: "Flexibility Trainer",
      social1: <FaInstagram />,
      social2: <FaFacebookF />,
      social3: <FaTwitter />,
      social4: <FaLinkedinIn />,
    },
    {
      id: 4,
      image: imageFour,
      name: "Shatta Wale",
      work: "Body Composition Trainer",
      social1: <FaInstagram />,
      social2: <FaFacebookF />,
      social3: <FaTwitter />,
      social4: <FaLinkedinIn />,
    },
    {
      id: 5,
      image: imageFive,
      name: "Gimba Yakub",
      work: "Circuit Trainer",
      social1: <FaInstagram />,
      social2: <FaFacebookF />,
      social3: <FaTwitter />,
      social4: <FaLinkedinIn />,
    },
    {
      id: 6,
      image: imageSix,
      name: "Wayne Idris",
      work: "Physical Intelligence Trainer",
      social1: <FaInstagram />,
      social2: <FaFacebookF />,
      social3: <FaTwitter />,
      social4: <FaLinkedinIn />,
    },
  ];
  return (
    <section className="container trainer__one">
      <div className="trainer__two">
        {Trainers.map((trainer) => {
          return (
            <div className="trainer__three">
              <img src={trainer.image} alt="" />
              <h3>{trainer.name}</h3>
              <span>{trainer.work}</span>
              <div className="trainer__four">
                <a className="icon__svg trainer__five" href="">
                  {trainer.social1}
                </a>
                <a className="icon__svg trainer__five" href="">
                  {trainer.social2}
                </a>
                <a className="icon__svg trainer__five" href="">
                  {trainer.social3}
                </a>
                <a className="icon__svg trainer__five" href="">
                  {trainer.social4}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tcontent;
