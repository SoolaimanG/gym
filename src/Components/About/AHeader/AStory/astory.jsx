import "./astory.css";
import pic_one from "../../../../Assets/gym__about_image_2.jpg";
import pic_two from "../../../../Assets/gym__about_image_3.jpg";
import pic_four from "../../../../Assets/gym__about_image_4.jpg";

const Astory = () => {
  return (
    <section className="container">
      <div className="astory__one">
        <div className="astory__two">
          <img src={pic_one} alt="" />
        </div>
        <div className="astory__three">
          <h2>Our Story</h2>
          <div className="astory__four">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique, pariatur animi. Voluptatibus numquam laborum officiis,
              consequuntur ex minima eveniet illum, consequatur quidem tenetur
              sunt hic quia cupiditate inventore?
            </p>
          </div>
          <div className="astory__five">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ratione in perferendis excepturi facere cupiditate, voluptatibus
              iste maxime! Nostrum quam molestias sint placeat dolorum nihil
              mollitia architecto. Voluptatum.
            </p>
          </div>
          <div className="astory__six">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="astory__grid">
        <div className="astory__three">
          <h2>Our Vision</h2>
          <div className="astory__four">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique, pariatur animi. Voluptatibus numquam laborum officiis,
              consequuntur ex minima eveniet illum, consequatur quidem tenetur
              sunt hic quia cupiditate inventore?
            </p>
          </div>
          <div className="astory__five">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ratione in perferendis excepturi facere cupiditate, voluptatibus
              iste maxime! Nostrum quam molestias sint placeat dolorum nihil
              mollitia architecto. Voluptatum.
            </p>
          </div>
          <div className="astory__six">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="astory__two">
          <img src={pic_two} alt="" />
        </div>
      </div>
      <div className="astory__one astory__alt">
        <div className="astory__two">
          <img src={pic_four} alt="" />
        </div>
        <div className="astory__three">
          <h2>Our Mission</h2>
          <div className="astory__four">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique, pariatur animi. Voluptatibus numquam laborum officiis,
              consequuntur ex minima eveniet illum, consequatur quidem tenetur
              sunt hic quia cupiditate inventore?
            </p>
          </div>
          <div className="astory__five">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ratione in perferendis excepturi facere cupiditate, voluptatibus
              iste maxime! Nostrum quam molestias sint placeat dolorum nihil
              mollitia architecto. Voluptatum.
            </p>
          </div>
          <div className="astory__six">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Astory;
