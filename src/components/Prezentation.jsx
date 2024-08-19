import Pre from "../../public/pre.jpg";
import { useEffect, useState } from 'react';

const Prezentation = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsImageVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const imageElement = document.getElementById('prezentation-image');
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
        <h1 className="mb-[20px] text-green-400 font-semibold text-2xl">ПРЕЗЕНТАЦИЯ</h1>
        <p className="text-3xl font-medium">Удобный инструмент для презентации</p>
        <p className="p-2 text-xl opacity-55 font-medium mt-[30px]">
          Компоненты системы GOHOUSE CRM позволят высвободить
        </p>
        <p className="p-2 text-xl opacity-55 font-medium">
          драгоценное свободное время. GOHOUSE включает в себя целый
        </p>
        <p className="p-2 text-xl opacity-55 font-medium">
          комплекс средств для автоматизации агентства недвижимости, который
        </p>
        <p className="p-2 text-xl opacity-55 font-medium">
          позволит Вам быть более продуктивным.
        </p>
      </div>
      <img
        id="prezentation-image"
        className={`w-full md:w-[450px] h-auto md:h-[300px] mt-8 md:mt-0 ${isImageVisible ? 'slide-up' : ''}`}
        src={Pre}
        alt="Prezentation image"
      />
    </div>
  );
};

export default Prezentation;
