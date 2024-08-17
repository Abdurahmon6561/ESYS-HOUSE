import Objects_image from "../../public/objects.jpg";
import { useEffect, useState } from 'react';

const Objects = () => {
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
    <div className="bg-slate-100 flex justify-around h-[650px] mt-[170px] mb-[120px]">
         <div className="mt-[150px]">
        <h1 className="mb-[20px] text-green-400 font-semibold text-2xl">ОБЪЕКТЫ</h1>
        <p className="text-3xl font-medium">ESYS HOUSE создан для работы как с жилой,<br /> так и с коммерческой недвижимостью.</p>
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
        className={`mt-[150px] w-[450px] h-[300px] ${isImageVisible ? 'slide-up' : ''}`}
        src={Objects_image}
        alt="Prezentation image"
      />
    </div>
  );
};

export default Objects;
