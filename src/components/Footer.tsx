import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="w-full bg-middle-gray flex justify-center items-center mt-8 py-8">
      <div className="max-w-[1200px] w-full flex flex-col justify-start items-start">
        <img src="/images/intek_footer_image.png" alt="Белое лого ИНТЕК" />
        <div className="flex justify-start items-start gap-4">
          <a href="/" className="text-2xl text-white hover:underline">
            Главная
          </a>
          <a
            href="/katalog-tovarov"
            className="text-2xl text-white hover:underline"
          >
            Каталог товаров
          </a>
          <a
            href="/dostavka-i-oplata"
            className="text-2xl text-white hover:underline"
          >
            Доставка и оплата
          </a>
          <a href="/sout" className="text-2xl text-white hover:underline">
            Соут
          </a>
          <a href="/o-kompanii" className="text-2xl text-white hover:underline">
            О компании
          </a>
        </div>
        <Separator className="text-white h-[4px] my-4" />
        <div className="w-full text-center text-white">
          <p>©2023 ООО «ИНТЕК». Все права защищены.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
