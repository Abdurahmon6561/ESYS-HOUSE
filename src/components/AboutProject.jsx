import { useEffect, useState } from 'react';
import '../index.css';

const AboutProject = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-project');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
   <div>
   <div className='hidden md:block mt-[250px]'>
  <div id="about-project" className={`flex flex-col md:flex-row justify-between mt-[120px] mb-[120px] ${isVisible ? 'fade-in-up' : ''}`}>
    <div className="flex flex-col items-center md:items-start md:flex-row md:ml-[103px]">
      <img className="mt-[130px] w-[270px] h-[300px] border-white border-none rounded-lg" src="https://i.pinimg.com/originals/3d/5a/37/3d5a37d5ce5925778636980ea5b149d7.jpg" alt="Project Image" />
      <div className="flex flex-col items-center md:items-start md:ml-[20px]">
        <img className="mt-[20px] w-[250px] h-[300px] border-white border-none rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafzqiLw5sEo3sl9N7NO8HYuG6Cog_zpGFpw&s" alt="Project Image" />
        <img className="mt-[20px] w-[250px] h-[150px] border-white border-none rounded-lg" src="https://www.home-designing.com/wp-content/uploads/2016/01/compact-small-apartment-ideas.jpg" alt="Project Image" />
      </div>
    </div>
    <div className="text-center md:text-left">
      <h1 className="mb-[20px] text-green-400 font-semibold text-2xl">О проекте</h1>
      <p className="text-3xl font-medium">Внедрите в свой бизнес передовые <br /> технологии</p>
      <p className='p-2 text-xl opacity-55 font-medium mt-[30px]'>Компоненты системы GOHOUSE CRM позволят высвободить</p>
      <p className='p-2 text-xl opacity-55 font-medium'>драгоценное свободное время. GOHOUSE включает в себя целый</p>
      <p className='p-2 text-xl opacity-55 font-medium'>комплекс средств для автоматизации агентства недвижимости, который</p>
      <p className='p-2 text-xl opacity-55 font-medium'>позволит Вам быть более продуктивным.</p>
    </div>
  </div>
</div>

      <div className=' md:hidden'>
      <div id="about-project" className={`flex flex-col md:flex-row justify-between mt-[120px] mb-[120px] ${isVisible ? 'fade-in-up' : ''}`}>
      <div className="flex flex-col items-center md:items-start md:ml-[103px]">
        {/* Text content */}
        <div className="text-center md:text-left mb-[20px] md:mb-0">
          <h1 className="mb-[20px] text-green-400 font-semibold text-2xl">О проекте</h1>
          <p className="text-3xl font-medium">Внедрите в свой бизнес передовые <br /> технологии</p>
          <p className='p-2 text-xl opacity-55 font-medium mt-[30px]'>Компоненты системы GOHOUSE CRM позволят высвободить</p>
          <p className='p-2 text-xl opacity-55 font-medium'>драгоценное свободное время. GOHOUSE включает в себя целый</p>
          <p className='p-2 text-xl opacity-55 font-medium'>комплекс средств для автоматизации агентства недвижимости, который</p>
          <p className='p-2 text-xl opacity-55 font-medium'>позволит Вам быть более продуктивным.</p>
        </div>

        {/* Images for mobile only */}
        <div className="md:hidden">
          <img className="mt-[20px] w-[250px] h-[300px] border-white border-none rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafzqiLw5sEo3sl9N7NO8HYuG6Cog_zpGFpw&s" alt="Project Image" />
        </div>
      </div>

      {/* Images for larger screens */}
      <div className="hidden md:flex flex-col items-center md:items-start">
        <img className="mt-[130px] w-[270px] h-[300px] border-white border-none rounded-lg" src="https://i.pinimg.com/originals/3d/5a/37/3d5a37d5ce5925778636980ea5b149d7.jpg" alt="Project Image" />
        <div className="flex flex-col items-center md:items-start md:ml-[20px]">
          <img className="mt-[20px] w-[250px] h-[300px] border-white border-none rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafzqiLw5sEo3sl9N7NO8HYuG6Cog_zpGFpw&s" alt="Project Image" />
          <img className="mt-[20px] w-[250px] h-[150px] border-white border-none rounded-lg" src="https://www.home-designing.com/wp-content/uploads/2016/01/compact-small-apartment-ideas.jpg" alt="Project Image" />
        </div>
      </div>
    </div>
    </div>
   </div>
  );
}

export default AboutProject;
