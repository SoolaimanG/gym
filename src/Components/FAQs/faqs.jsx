import "./faqs.css";
import { FaQuestion } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";

const FAQs = () => {
  const [show, setShow] = useState(false);
  const faq = [
    {
      id: 1,
      question: "How often do i exercise?",
      icon: <BsPlusLg />,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sed.",
    },
    {
      id: 1,
      question: "How long should my workout be?",
      icon: <BsPlusLg />,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sed.",
    },
    {
      id: 3,
      question: "Should i do strength training,cardio or both?",
      icon: <BsPlusLg />,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sed.",
    },
    {
      id: 4,
      question: "What time of the day is the best to workout?",
      icon: <BsPlusLg />,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sed.",
    },
    {
      id: 5,
      question: "Do i need to warm up before my workout?",
      icon: <BsPlusLg />,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sed.",
    },
    {
      id: 6,
      question: "Should i lift weight for strength training?",
      icon: <BsPlusLg />,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sed.",
    },
  ];
  return (
    <section className="container Faqs__container">
      <div className="faq__second">
        <div className="icon__svg faq__third">
          <FaQuestion />
        </div>
        <h2>FAQs</h2>
      </div>
      <div className="faq__fourth">
        {faq.map((item) => {
          return (
            <article
              key={item.id}
              onClick={() => {
                setShow(!show);
              }}
              className="faq__fifth"
            >
              <div className="faq__sixth">
                <h3>{item.question}</h3>
                {show ? <AiOutlineMinus /> : item.icon}
              </div>
              {show && <p>{item.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;
