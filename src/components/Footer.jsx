import Footer_logo from "../../public/footer_logo.svg";
import Location_image from "../../public/location.svg";
import Phone_image from "../../public/phone-call.svg";
import Mail from "../../public/mail.svg";
import Telegram from "../../public/telegram.svg";
import Instagram from "../../public/instagram.svg";
import Facebook from "../../public/facebook.svg";



const Footer = () => {
  return (
    <div className="bg-[#0e685a] h-[350px]">
      <div className="p-8">
        <div className=" flex justify-between">
          <img
            src={Footer_logo}
            alt="logo"
            className="w-[260px] mt-[-60px] ml-[30px]"
          />
          <div>
            <div className=" flex mt-[20px] mb-[40px]">
              <img
                src={Location_image}
                alt="image"
                className=" mt-2 mr-[12px] h-[30px]"
              />
              <h3 className=" text-xl font-normal text-white w-[700px]">
                Узбекистан, Ташкент, Мизро-Улугбекский район, улица Чуст, дом
                15. Ориентир: станция метро Буюк Ипак Йули; (бывш. Максим
                Горький)
              </h3>
            </div>
            <div className=" flex justify-around">
              <div className=" flex">
                <img src={Phone_image} alt="image" className="h-[20px]" />
                <a
                  className="text-white font-semibold text-xl ml-2 mt-[-6px]"
                  href="tel:+998712001133"
                >
                  +998 71 200 11 33
                </a>
              </div>
              <div className=" flex">
                <img src={Mail} alt="image" className="h-[20px]" />
                <a
                  href="mailto:info@ritm.uz"
                  className="text-white font-semibold text-xl ml-2 mt-[-6px]"
                >
                  info@ritm.uz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=" opacity-55 mt-[30px] w-screen" />
      <div className=" flex mt-[20px]">
        <h3 className=" ml-[40px] text-white text-[17px] opacity-80 mt-[40px]">
          © 2024 - 2028 Copyright. HouseLab. Все права защищены.
        </h3>
        <div className=" flex space-x-4 mt-[20px] ml-[700px]">
         <button 
         onClick={() => (window.location.href = " https://t.me/endless_live ")}
         className="hover:scale-110 transition-transform  w-[40px] h-[40px] bg-[#28a18f] rounded-3xl">
         <img src={Telegram} alt="icon" className="h-[30px] ml-1" />
         </button>
         <button
         onClick={() => (window.location.href = " https://www.instagram.com/abdukadirovv._a/ ")}
         className=" hover:scale-110 transition-transform  w-[40px] h-[40px] bg-[#28a18f] rounded-3xl">
          <img src={Instagram} alt="icon" className="h-[22px] ml-[9px]" />
         </button>
         <button
         onClick={() => (window.location.href = "https://www.facebook.com/profile.php?id=100089769144656")}
         className=" hover:scale-110 transition-transform  w-[40px] h-[40px]  bg-[#28a18f] rounded-3xl">
          <img src={Facebook} alt="icon" className="h-[25px] ml-2" />
         </button>

        </div>
      </div>
    </div>
  );
};

export default Footer;
