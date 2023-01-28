import "./testimonial.css";
import { ImQuotesLeft } from "react-icons/im";
import image1 from "../../Assets/gym__review_1.avif";
import image2 from "../../Assets/gym__review_2.avif";
import image3 from "../../Assets/gym__review_3.avif";
import image4 from "../../Assets/gym__review_4.avif";
import image5 from "../../Assets/gym__review_5.avif";
import image6 from "../../Assets/gym__review_6.avif";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonies = [
    {
      id: 1,
      image: image1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores rem, modi cupiditate quasi labore explicabo quibusdam quas provident.",
      name: "Edem Quist",
      work: "University Lecturer",
    },
    {
      id: 2,
      image: image2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores rem, modi cupiditate quasi labore explicabo quibusdam quas provident.",
      name: "Ibrahim Ndana",
      work: "Millionaire",
    },
    {
      id: 3,
      image: image3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores rem, modi cupiditate quasi labore explicabo quibusdam quas provident.",
      name: "Ernest Okafor",
      work: "Trader",
    },
    {
      id: 4,
      image: image4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores rem, modi cupiditate quasi labore explicabo quibusdam quas provident.",
      name: "Ameer Yusuf",
      work: "Business Man",
    },
    {
      id: 5,
      image: image5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores rem, modi cupiditate quasi labore explicabo quibusdam quas provident.",
      name: "Seyi Mohammed",
      work: "Dancer",
    },
    {
      id: 6,
      image: image6,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores rem, modi cupiditate quasi labore explicabo quibusdam quas provident.",
      name: "Idris Mubarak",
      work: "Forex Trader",
    },
  ];
  return (
    <section className="container container__one">
      <div className="container__two">
        <ImQuotesLeft className="icon__svg" />
        <h2>Testimonial</h2>
      </div>
      <Swiper // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        gap="2rem"
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          0: {
            width: 600,
            slidesPerView: 2,
          },
          600: {
            width: 768,
            slidesPerView: 2,
          },
          1200: {
            width: 1200,
            slidesPerView: 3,
          },
        }}
        className="container__three"
      >
        {testimonies.map((items) => {
          return (
            <SwiperSlide className="container__four" key={items.id}>
              <div className="container__five">
                <img src={items.image} alt="Name" />
              </div>
              <div className="container__six">
                <p>
                  <em>{items.review}</em>
                </p>
                <h4>{items.name}</h4>
                <h5>{items.work}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
