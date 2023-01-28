import GalleryH from "../../Components/Gallery/GalleryContent/Gheader";
import Gdisplay from "../../Components/Gallery/GalleryDisplay/Gdisplay";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer/footer";
import "./gallery.css";

const Gallery = () => {
  return (
    <div>
      <NavBar />
      <GalleryH />
      <Gdisplay />
      <Footer />
    </div>
  );
};

export default Gallery;
