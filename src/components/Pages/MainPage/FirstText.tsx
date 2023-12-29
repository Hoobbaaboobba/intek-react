import { Separator } from "@/components/ui/separator";
import { Quote } from "lucide-react";

const FirstText = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-1 py-8 sm:p-8">
      <Quote size={32} color="#2966BA" />
      <h1 className="text-xl">
        Коллектив ИНТЕК усердно действует на протяжении всей территории России,
        стремясь предоставить более устойчивые, безопасные и эффективные решения
        в производстве шпателей. Мы придаем особое значение разрешению задач
        наших клиентов и постоянно работаем над улучшением наших продуктов.
      </h1>
      <Separator />
      <h2 className="text-dark-gray">
        C 2009 года основным направлением деятельности компании становится
        выпуск ручного строительного инструмента под своими и партнёрскими
        торговыми марками.
      </h2>
    </div>
  );
};

export default FirstText;
