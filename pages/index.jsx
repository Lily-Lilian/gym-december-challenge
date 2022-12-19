import Discover from "../components/sections/Discover";
import Hero from "../components/sections/Hero";
import News from "../components/sections/News";
import Navbar from "./../components/layouts/Navbar";
import Select from "../components/sections/Select";
import Motivation from "../components/sections/Motivation";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <News />
      <Discover />
      <Select />
      <Motivation />
    </div>
  );
};

export default Home;
