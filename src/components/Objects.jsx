import Objects_image from "../../public/objects.jpg";

const Objects = () => {
  return (
    <div className="bg-slate-100 flex flex-col md:flex-row items-center justify-around h-auto md:h-[650px] mt-[170px] mb-[120px]">
      <div className="flex flex-col items-center md:items-start mt-8 md:mt-[150px] order-2 md:order-1">
        <h1 className="mb-[20px] text-green-400 font-semibold text-2xl text-center md:text-left">ОБЪЕКТЫ</h1>
        <p className="text-3xl font-medium text-center md:text-left">ESYS HOUSE создан для работы как с жилой,<br /> так и с коммерческой недвижимостью.</p>
        <p className="p-2 text-xl opacity-55 font-medium text-center md:text-left mt-[30px]">
          Компоненты системы GOHOUSE CRM позволят высвободить
        </p>
        <p className="p-2 text-xl opacity-55 font-medium text-center md:text-left">
          драгоценное свободное время. GOHOUSE включает в себя целый
        </p>
        <p className="p-2 text-xl opacity-55 font-medium text-center md:text-left">
          комплекс средств для автоматизации агентства недвижимости, который
        </p>
        <p className="p-2 text-xl opacity-55 font-medium text-center md:text-left">
          позволит Вам быть более продуктивным.
        </p>
      </div>
      <img
        id="prezentation-image"
        className={`w-full md:w-[450px] h-auto md:h-[300px] mt-8 md:mt-[150px] order-1 md:order-2`}
        src={Objects_image}
        alt="Prezentation image"
      />
    </div>
  );
};

export default Objects;
