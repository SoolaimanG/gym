import "./program.css";
import { FaCrown } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const Program = () => {
  const program_Data = [
    {
      id: 1,
      icon: <FiSettings />,
      head_highlight: "Program One",
      head_ptag: "You have to make a difference today!YES you can",
      head_link: "Learn More",
    },
    {
      id: 2,
      icon: <FiSettings />,
      head_highlight: "Program Two",
      head_ptag: "You have to make a difference today!YES you can",
      head_link: "Learn More",
    },
    {
      id: 3,
      icon: <FiSettings />,
      head_highlight: "Program Three",
      head_ptag: "You have to make a difference today!YES you can",
      head_link: "Learn More",
    },
    {
      id: 4,
      icon: <FiSettings />,
      head_highlight: "Program Four",
      head_ptag: "You have to make a difference today!YES you can",
      head_link: "Learn More",
    },
  ];
  return (
    <section className="container program__container">
      <div className="program__header">
        <div className="icon__svg">
          <FaCrown />
        </div>
        <h2>Our Programs</h2>
      </div>
      <div className="program_map_container">
        <div className="program__grid">
          {program_Data.map((items) => {
            return (
              <div className="map__each" key={items.id}>
                <div className="setting__icon">{items.icon}</div>
                <h3>{items.head_highlight}</h3>
                <p>{items.head_ptag}</p>
                <a href="" className="btn btn__cta">
                  {items.head_link}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Program;
