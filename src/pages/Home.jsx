import Layout from "./Layout";
import AboutProject from "../components/AboutProject";
import Sistem from "../components/Sistem";
import Prezentation from "../components/Prezentation";
import Objects from "../components/Objects";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";



const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen overflow-x-hidden">
      <Layout />
   
      <div>
        <AboutProject />
        <Sistem/>
        <Prezentation/>
        <Reviews/>
        <Objects/>
      </div>
    <Footer/>
    </div>
    </div>
  );
};

export default Home;
