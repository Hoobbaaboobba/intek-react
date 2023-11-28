import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PhoneCall } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-0 lg:gap-8">
      <a href="/">
        <img
          src="/images/intek-logo.png"
          alt="Логотип ИНТЕК"
          width="244"
          height="110"
          className="cursor-pointer w-full h-[110px]"
        />
      </a>
      <div className="max-w-[600px] w-full text-black flex justify-center items-center">
        <Input
          placeholder="Поиск"
          className="w-full border-2 border-main-orange rounded-l-lg rounded-r-none text-xl"
        />
        <Button
          className="rounded-l-none rounded-r-lg px-4"
          variant="default"
          size="lg"
        >
          Найти
        </Button>
      </div>
      <div className="rounded-lg border-2 border-dark-gray hidden lg:flex gap-2 p-2">
        <PhoneCall />
        <p>+7 (499) 290-02-58</p>
      </div>
    </div>
  );
};

export default Header;
