import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const UyutSection = () => {
  return (
    <div className="w-full mt-16 flex flex-col gap-4">
      <h1 className="text-5xl font-bold text-center my-2">
        Инструменты ИНТЕК делают чудо
      </h1>
      <div className="relative h-[400px] bg-[url('/images/uyut1.png')] bg-cover bg-center rounded-lg">
        <div className="z-20 absolute bottom-12 left-12 text-white flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Уют для дома</h1>
          <h2 className="leading-5 text-white/70">
            Подборка шпателей ИНТЕК <br /> для уюта вашего дома
          </h2>
          <Button className="text-white gap-1" size="lg">
            Подробнее <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
        <div className="relative h-[250px] bg-[url('/images/uyut2.png')] bg-cover bg-center rounded-lg">
          <div className="z-20 absolute top-4 right-8 text-white flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Уют для ванной</h1>
            <h2 className="leading-5 text-white/90 text-right">
              Подборка шпателей ИНТЕК <br /> для уюта вашего дома
            </h2>
          </div>
        </div>
        <div className="relative h-[250px] bg-[url('/images/uyut3.png')] bg-cover bg-center rounded-lg">
          <div className="z-20 absolute bottom-12 left-12 text-white flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Уют для дома</h1>
            <h2 className="leading-5 text-white/70">
              Подборка шпателей ИНТЕК <br /> для уюта вашего дома
            </h2>
          </div>
        </div>
        <div className="relative h-[250px] bg-[url('/images/uyut4.png')] bg-cover bg-center rounded-lg">
          <div className="z-20 absolute top-4 right-8 text-white flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Уют для дома</h1>
            <h2 className="leading-5 text-white/70 text-right">
              Подборка шпателей ИНТЕК <br /> для уюта вашего дома
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UyutSection;
