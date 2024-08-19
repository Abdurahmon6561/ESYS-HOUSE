import { useEffect, useState, useRef } from 'react';
import Shaxmat from '../../public/shaxmat.jpg';

const Sale = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsImageVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentImage = imageRef.current;
    if (currentImage) {
      observer.observe(currentImage);
    }

    return () => {
      if (currentImage) {
        observer.unobserve(currentImage);
      }
    };
  }, []);

  return (
    <div className="flex justify-around mb-[150px]">
      <img
        ref={imageRef}
        className={`ml-[20px] w-[450px] h-[300px] transition-transform duration-1000 ease-in-out ${isImageVisible ? 'translate-x-0' : '-translate-x-[450px]'}`}
        src={Shaxmat}
        alt="shaxmat_image"
      />
      <div>
        <h1 className="mb-[20px] text-green-400 font-semibold text-2xl">ПРОДАЖА</h1>
        <p className="text-3xl font-medium">Шахматка новостроек.</p>
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
    </div>
  );
};

export default Sale;
