import { Truck } from "lucide-react";

const AdvanatgesSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 italic">
      <a
        href="/dostavka-i-oplata"
        className="flex flex-col justify-center items-center group"
      >
        <div className="flex bg-border rounded-t-lg p-4">
          <div>
            <h1 className="text-6xl leading-[50px] italic font-bold">
              Быстрая доставка
            </h1>
            <h2 className="mt-2">
              Доставка до грузополучателя (включена в стоимость товара) в
              пределах г. Москва и не далее 10 км от МКАД.
            </h2>
          </div>
          <img
            src="/images/red-car.png"
            alt="Быстрая товаров ИНТЕК"
            width="290"
            height="190"
          />
        </div>
        <div className="flex justify-center items-center gap-4 py-4 bg-main-orange group-hover:bg-main-orange/90 transition w-full rounded-b-lg text-white text-5xl font-bold">
          <Truck size={48} className="drop-shadow-lg" />
          <p className="drop-shadow-lg italic tracking-wide">
            Доставка и оплата
          </p>
        </div>
      </a>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <a
            href="/novyye-tovary"
            className="flex bg-border rounded-lg justify-center items-center w-full p-2 leading-6 gap-4 text-2xl font-medium"
          >
            <img src="/images/intek-new.png" alt="Новая продукция ИНТЕК" />
            <span>Новая продукция</span>
          </a>
          <div className="flex bg-border rounded-lg justify-center items-center w-full p-2 gap-4 leading-6 text-2xl font-medium">
            <img src="/images/intek-sales.png" alt="Товары со скидкой ИНТЕК" />
            <span>Товары со скидкой</span>
          </div>
        </div>
        <div className="flex justify-center items-center rounded-lg gap-4 italic text-white w-full p-2 text-4xl tracking-wide bg-main-orange">
          <span className="drop-shadow-xl font-bold">Выгодная цена!</span>
          <img
            src="/images/intek-price.png"
            alt="Товары ИНТЕК по выгодным ценам"
          />
        </div>
        <div className="flex gap-5">
          <div className="flex bg-border rounded-lg justify-center items-center w-full py-2 text-xl p-2 leading-6 gap-2 font-medium">
            <img
              src="/images/intek-instruments.png"
              alt="Профессиональные инструменты ИНТЕК"
            />
            <span>Профессиональный инструмент</span>
          </div>
          <div className="flex bg-border rounded-lg justify-center items-center w-full p-[10px] gap-4 text-2xl leading-6 font-medium">
            <img src="/images/intek-brash.png" alt="" />
            <span>Щеточные изделия</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanatgesSection;
