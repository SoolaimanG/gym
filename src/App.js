import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Gallery from "./Pages/Gallery/gallery";
import Home from "./Pages/Home/home";
import Plans from "./Pages/Plans/plans";
import Trainers from "./Pages/Trainers/trainers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
