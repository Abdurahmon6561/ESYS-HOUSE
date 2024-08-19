import All from "../../public/all.png";

const Sistem = () => {


  return (
    <div id="sistem" className="bg-slate-100 flex flex-col md:flex-row items-center justify-around h-auto md:h-[650px] mt-24 md:mt-[170px] mb-24 md:mb-[120px]">
      <div className="text-center md:text-left md:mt-0 mt-8 md:ml-8">
        <h2 className="text-green-400 font-semibold text-xl md:text-2xl mb-4">СИСТЕМА ESYS HOUSE</h2>
        <p className="text-2xl md:text-3xl font-medium mb-4">Востребованный функционал</p>
        <p className="text-lg md:text-xl opacity-55 font-medium mb-2">
          Компоненты системы GOHOUSE CRM позволят высвободить драгоценное свободное время.
        </p>
        <p className="text-lg md:text-xl opacity-55 font-medium mb-2">
          GOHOUSE включает в себя целый комплекс средств для автоматизации агентства недвижимости, который позволит Вам быть более продуктивным.
        </p>
      </div>
      <img
        id="sistem-image"
        className="w-full md:w-[600px] h-auto md:h-[350px] mt-8 md:mt-[150px]"
        src={All}
        alt="Sistem image"
      />
    </div>
  );
};

export default Sistem;
