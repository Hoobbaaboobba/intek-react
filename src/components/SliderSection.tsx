import Card from "./Card";
import Slider from "./Slider";
import { Button } from "./ui/button";

const SliderSection = () => {
  return (
    <div className="w-full mt-12">
      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <h1 className="text-4xl font-bold leading-8">Большой ассортимент</h1>
        <h2 className="text-black/50">
          Самые актуальные инструменты ИНТЕК по выгодным ценам.
        </h2>
        <Button size="lg" className="text-white">
          Смотреть все
        </Button>
      </div>
      <div className="w-full flex gap-2">
        <Card
          src="/images/shpatel.png"
          text={
            "Гладилка - прямая 140х280 мм. Используется для нанесения,распределения и выравнивания различных строительных растворов по вертикальным и горизонтальным поверхностям."
          }
          altText={"Шпатели ИНТЕК"}
        />
        <Card
          src="/images/brus.png"
          text={
            "Гладилка - прямая 140х280 мм. Используется для нанесения,распределения и выравнивания различных строительных растворов по вертикальным и горизонтальным поверхностям."
          }
          altText={""}
        />
        <Card
          src="/images/shpatel.png"
          text={
            "Гладилка - прямая 140х280 мм. Используется для нанесения,распределения и выравнивания различных строительных растворов по вертикальным и горизонтальным поверхностям."
          }
          altText={""}
        />
        <Card
          src="/images/shpatel.png"
          text={
            "Гладилка - прямая 140х280 мм. Используется для нанесения,распределения и выравнивания различных строительных растворов по вертикальным и горизонтальным поверхностям."
          }
          altText={""}
        />
        <Card
          src="/images/shpatel.png"
          text={
            "Гладилка - прямая 140х280 мм. Используется для нанесения,распределения и выравнивания различных строительных растворов по вертикальным и горизонтальным поверхностям."
          }
          altText={""}
        />
        <Card
          src="/images/shpatel.png"
          text={
            "Гладилка - прямая 140х280 мм. Используется для нанесения,распределения и выравнивания различных строительных растворов по вертикальным и горизонтальным поверхностям."
          }
          altText={""}
        />
      </div>
    </div>
  );
};

export default SliderSection;
