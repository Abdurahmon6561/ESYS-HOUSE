import Layout from "./Layout";
import AboutProject from "../components/AboutProject";
import Sistem from "../components/Sistem";
import Prezentation from "../components/Prezentation";
import Objects from "../components/Objects";
import Sale from "../components/Sale";



const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen overflow-x-hidden">
      <Layout />
   
      <div>
        <AboutProject />
        <Sistem/>
        <Prezentation/>
        <Objects/>
        <Sale/>
      </div>
    </div>
    </div>
  );
};

export default Home;
