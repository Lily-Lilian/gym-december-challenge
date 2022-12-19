import Hero from "../components/sections/Hero";
import News from "../components/sections/News";
import Navbar from "./../components/layouts/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <News />
    </div>
  );
};

export default Home;
