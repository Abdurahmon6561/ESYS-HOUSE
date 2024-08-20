import Pre from "../../public/pre.jpg";
import { useEffect, useState } from "react";

const Prezentation = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsImageVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const imageElement = document.getElementById("prezentation-image");
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-around mt-[180px] mb-[150px]">
      <div className="flex flex-col items-center md:items-start md:order-1 order-2 text-center md:text-left">
        <h1 className="mb-[20px] text-[#28a18f] font-semibold text-2xl">
          ПРОДАЖА
        </h1>
        <p className="p-2 w-[700px] text-xl opacity-55 font-medium">
          Интерактивная таблица новостроек. С помощью удобной и
          многофункциональной шахматки вы мгновенно получаете доступ ко всей
          нужной информации: выбирайте квартиру, устанавливайте цены,
          просматривайте планировки, бронируйте и заключайте договоры.
        </p>
      </div>
      <img
        id="prezentation-image"
        className={`w-full md:w-[450px] h-auto md:h-[300px] mt-8 md:mt-0 ${
          isImageVisible ? "slide-up" : ""
        }`}
        src={Pre}
        alt="Prezentation image"
      />
    </div>
  );
};

export default Prezentation;
