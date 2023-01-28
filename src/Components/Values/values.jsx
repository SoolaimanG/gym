import "./value.css";
import valueImage from "../../Assets/gym__value_image.jpg";
import { GiCutDiamond } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";

const Value = () => {
  const value_item = [
    {
      id: 1,
      icon: <AiFillSetting />,
      header: "Value One",
      p_tag:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, amet!",
    },
    {
      id: 2,
      icon: <AiFillSetting />,
      header: "Value Two",
      p_tag:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, amet!",
    },
    {
      id: 3,
      icon: <AiFillSetting />,
      header: "Value Three",
      p_tag:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, amet!",
    },
    {
      id: 4,
      icon: <AiFillSetting />,
      header: "Value Four",
      p_tag:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, amet!",
    },
  ];
  return (
    <section className="container value__container">
      <div className="value___image">
        <img src={valueImage} alt="" />
      </div>
      <div>
        <div className="value__heading">
          <div className="value__svg">
            <GiCutDiamond className="icon__svg" />
          </div>
          <h2>Our Values</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
          temporibus reprehenderit. Sint accusantium harum odit dignissimos,
          reprehenderit cum!
        </p>
        <div className="value___grid">
          {value_item.map((item) => {
            return (
              <article key={item.id}>
                <div className="icon__svg icon_svg_one">{item.icon}</div>
                <h4>{item.header}</h4>
                <p>{item.p_tag}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Value;
