import Footer_logo from "../../public/footer_logo.svg";
import Location_image from "../../public/location.svg";
import Phone_image from "../../public/phone-call.svg";
import Mail from "../../public/mail.svg";
import Telegram from "../../public/telegram.svg";
import Instagram from "../../public/instagram.svg";
import Facebook from "../../public/facebook.svg";

const Footer = () => {
  return (
    <div className="bg-[#0e685a] md:h-[350px]">
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between">
          <img
            src={Footer_logo}
            alt="logo"
            className="w-[260px] md:mt-[-60px] ml-[30px] mx-auto md:mx-0"
          />
          <div className="mt-4 md:mt-0">
            <div className="flex flex-row md:flex-row items-start md:items-center mt-4 mb-[20px] md:mb-[40px]">
              <img
                src={Location_image}
                alt="image"
                className="mt-2 mr-[12px] h-[20px] md:h-[30px]"
              />
              <h3 className="text-base md:text-xl font-normal text-white">
                Узбекистан, Ташкент, Мизро-Улугбекский район
              </h3>
            </div>
            <div className="flex flex-col md:flex-row md:justify-around">
              <div className="flex items-center mb-2 md:mb-0">
                <img src={Phone_image} alt="image" className="h-[20px]" />
                <a
                  className="text-white font-semibold text-base md:text-xl ml-2"
                  href="tel:+998712001133"
                >
                  +998 71 200 11 33
                </a>
              </div>
              <div className="flex items-center">
                <img src={Mail} alt="image" className="h-[20px]" />
                <a
                  href="mailto:info@ritm.uz"
                  className="text-white font-semibold text-base md:text-xl ml-2"
                >
                  info@ritm.uz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="opacity-55 mt-[30px] w-full" />
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <h3 className="text-white text-sm md:text-[17px] opacity-80">
          © 2024 - 2028 Copyright. HouseLab. Все права защищены.
        </h3>
        <div className="flex space-x-4 mt-2 md:mt-0 mb-[20px]">
          <button 
            onClick={() => (window.location.href = "https://t.me/endless_live")}
            className="hover:scale-110 transition-transform w-[40px] h-[40px] bg-[#28a18f] rounded-full flex items-center justify-center"
          >
            <img src={Telegram} alt="icon" className="h-[30px]" />
          </button>
          <button
            onClick={() => (window.location.href = "https://www.instagram.com/abdukadirovv._a/")}
            className="hover:scale-110 transition-transform w-[40px] h-[40px] bg-[#28a18f] rounded-full flex items-center justify-center"
          >
            <img src={Instagram} alt="icon" className="h-[22px]" />
          </button>
          <button
            onClick={() => (window.location.href = "https://www.facebook.com/profile.php?id=100089769144656")}
            className="hover:scale-110 transition-transform w-[40px] h-[40px] bg-[#28a18f] rounded-full flex items-center justify-center"
          >
            <img src={Facebook} alt="icon" className="h-[25px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
