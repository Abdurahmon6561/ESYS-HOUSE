const Header = () => {
  return (
    <div className="mt-[80px] text-center py-10 bg-[#f8f9fc]">
      <h2 className="font-bold text-5xl leading-tight mb-4 text-gray-900">
        Простая и недорогая онлайн-платформа для <br /> продажи недвижимости
      </h2>
      <h3 className=" relative text-lg font-medium w-[950px] mx-auto text-gray-600 mb-8">
        Интуитивно понятный интерфейс, который полностью удовлетворяет потребности в продаже недвижимости. Стоимость ниже, чем у других решений на рынке. Запишитесь на демонстрацию, чтобы увидеть платформу в действии.
      </h3>
      <button
      onClick={() => (window.location.href = "https://gohouse.uz")}
      className=" relative cursor-pointer w-[220px] bg-[#28a18f] text-white py-3 rounded-full text-lg font-semibold hover:bg-[#197063] transition duration-300">
        Записаться на демо
      </button>
    </div>
  );
}

export default Header;