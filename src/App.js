import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MinimalDesign from "./components/MinimalDesign/MinimalDesign";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import DesignBrands from "./components/DesignBrands/DesignBrands";
import CreateStories from "./components/CreateStoriesSection/CreateStories";
import HitTheGround from "./components/HitTheGround/HitTheGround";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* the list of components represents the different sections of the website */}
      {/* It respresents the navbar section */}
      <Navbar />

      {/* It represents the minimal design section */}
      <MinimalDesign />

      {/* It represents the experience section */}
      <ExperienceSection />

      {/* It represents the design brands section */}
      <DesignBrands />

      {/* It represents the create stories section */}
      <CreateStories />

      {/* It represents the hit the ground section */}
      <HitTheGround />

      {/* It represents the footer section */}
      <Footer />
    </>
  );
}

export default App;
