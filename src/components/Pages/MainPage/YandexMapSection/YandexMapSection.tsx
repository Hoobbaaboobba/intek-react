import { MailIcon, PhoneCallIcon } from "lucide-react";
import YandexMap from "./YandexMap";

const YandexMapSection = () => {
  return (
    <div className="my-[100px] flex w-full items-center justify-center px-8">
      <div className="flex w-[1300px] flex-col items-start justify-center gap-16 lg:flex-row lg:gap-8 xl:gap-16">
        <YandexMap />
        <div className="flex flex-col justify-start gap-6 text-center text-dark-gray lg:items-start lg:text-start">
          <h1 className="text-4xl font-semibold">ООО «ИНТЕК»</h1>
          <div>
            <h2 className="mb-2 text-lg font-light">
              141031, РФ, Московская область, г. Мытищи, д. Сгонники, ул.
              Промышленная, вл. 7, стр. 8а
            </h2>
            <h3 className="text-lg">Понедельник – Пятница с 8:30 до 17:00</h3>
          </div>
          <div className="flex flex-col justify-center gap-1 text-center lg:items-start">
            <div className="flex items-center justify-center gap-2 font-semibold">
              <PhoneCallIcon className="text-main-blue" />
              <span>+7 (499) 290-02-58</span>
            </div>
            <div className="flex items-center justify-center gap-2 font-semibold">
              <PhoneCallIcon className="text-main-blue" />
              <span>+7 (915) 003-83-73</span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1 text-center lg:items-start">
            <div className="flex items-center justify-center gap-2 font-semibold">
              <MailIcon className="text-main-blue" />
              <span>info@intek-tool.ru</span>
            </div>
            <div className="flex items-center justify-center gap-2 font-semibold">
              <MailIcon className="text-main-blue" />
              <span>manager@intek-tool.ru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YandexMapSection;
