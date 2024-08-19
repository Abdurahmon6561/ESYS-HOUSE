const Header = () => {
  return (
    <div className="mt-[80px] text-center py-10 bg-[#f8f9fc] px-4 sm:px-6 lg:px-8">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 text-gray-900">
        Простая и недорогая онлайн-платформа для <br /> продажи недвижимости
      </h2>
      <h3 className="relative text-base sm:text-lg md:text-xl w-full max-w-4xl mx-auto text-gray-600 mb-8">
        Интуитивно понятный интерфейс, который полностью удовлетворяет потребности в продаже недвижимости. Стоимость ниже, чем у других решений на рынке. Запишитесь на демонстрацию, чтобы увидеть платформу в действии.
      </h3>
      <button
        onClick={() => (window.location.href = "https://gohouse.uz")}
        className="relative cursor-pointer w-full max-w-xs bg-[#28a18f] text-white py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#197063] transition duration-300"
      >
        Записаться на демо
      </button>
    </div>
  );
}

export default Header;
