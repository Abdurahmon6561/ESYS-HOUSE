import { useEffect, useState } from "react";
import houseLAb from "../../public/houselab.png";
import "../index.css";

const AboutProject = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const imageElement = document.getElementById("project-image");
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
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around p-4">
      <img
        id="project-image"
        className={`mt-8 w-full max-w-[440px] h-auto border-white border-none rounded-lg transition-transform duration-1000 ${
          isImageVisible ? "slide-in-left" : "opacity-0"
        }`}
        src={houseLAb}
        alt="Project Image"
      />
      <div className="mt-8 md:mt-0 md:text-left flex flex-col items-center md:items-start">
        <h1 className="mb-4 text-[#28a18f] font-semibold text-2xl md:text-3xl">
          СИСТЕМА HOUSELAB
        </h1>
        <p className="text-base md:text-lg w-full max-w-[700px] text-center md:text-left">
          Полный набор необходимых функций Система HOUSELAB включает все
          нужные инструменты для эффективной работы. Простой и удобный
          интерфейс позволяет выполнить задачи за минуты, на которые без
          HOUSELAB потребовалось бы гораздо больше времени.
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
