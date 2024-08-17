import Layout from "./Layout";
import Backgroung_image from "../../public/bg-image.jpg";
import AboutProject from "../components/AboutProject";
import Sistem from "../components/Sistem";
import Prezentation from "../components/Prezentation";
import Objects from "../components/Objects";
import Sale from "../components/Sale";



const Home = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div
        className="w-screen h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${Backgroung_image})`,
        }}
      >
        <Layout />
      </div>
      <div>
        <AboutProject />
        <Sistem/>
        <Prezentation/>
        <Objects/>
        <Sale/>
      </div>
    </div>
  );
};

export default Home;
