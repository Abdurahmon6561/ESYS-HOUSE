import { useState } from 'react';
import Logo from "../../public/logo.svg";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-screen p-10 h-[50px] flex items-center justify-between">
      <div>
        <img className="w-[120px] cursor-pointer" src={Logo} alt="Logo" />
      </div>
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-4">
          <li className="text-white p-2 font-semibold cursor-pointer relative group">
            О проекте
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="text-white p-2 font-semibold cursor-pointer relative group">
            О компании
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="text-white p-2 font-semibold cursor-pointer relative group">
            Тарифы
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="text-white p-2 font-semibold cursor-pointer relative group">
            +998 71 123 45 67
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
      <div className='flex space-x-2 ml-[-60px]'>
      <button
        onClick={() => (window.location.href = "https://gohouse.uz")}
        className="p-2 rounded-2xl text-white border-2 transition-transform ease-in-out transform border-green-300 hidden md:block"
      >
        Войти
      </button>
      <button
            onClick={() => (window.location.href = "https://gohouse.uz/demo")}
            className="p-2 rounded-2xl text-white border-2 transition-transform ease-in-out transform border-green-500 hidden md:block"
          >
            Демо-доступ
          </button>
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        {isMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        )}
      </button>
      <div className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          <li className="text-white p-2 font-semibold cursor-pointer relative group">
            О проекте
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="text-white p-2 font-semibold cursor-pointer relative group">
            О компании
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="text-white p-2 font-semibold cursor-pointer relative group">
            Тарифы
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="text-white p-2 font-semibold cursor-pointer relative group">
            +998 71 123 45 67
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <div className="p-4">
          <button
            onClick={() => (window.location.href = "https://gohouse.uz")}
            className="w-full p-2 rounded-2xl text-white border-2 transition-transform ease-in-out transform border-green-500"
          >
            Войти
          </button>
          <button
            onClick={() => (window.location.href = "https://gohouse.uz/demo")}
            className="w-full mt-4 p-2 rounded-2xl text-white border-2 transition-transform ease-in-out transform border-green-500"
          >
            Демо-доступ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
