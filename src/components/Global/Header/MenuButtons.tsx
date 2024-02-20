import { Button } from "@/components/ui/button";

export const buttons = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Каталог",
    href: "/katalog-tovarov",
  },
  {
    title: "Доставка",
    href: "/dostavka-i-oplata",
  },
  {
    title: "Партнеры",
    href: "/dostavka-i-oplata",
  },
  {
    title: "О компании",
    href: "/o-kompanii",
  },
  {
    title: "Новости",
    href: "/o-kompanii",
  },
  {
    title: "Контакты",
    href: "/kontakt",
  },
];

interface Props {
  url: any;
  more40: boolean;
  isFit: boolean;
}

const MenuButtons = ({ url, more40, isFit }: Props) => {
  const splittedUrl = url.split("/")[3];
  return (
    <div className="hidden lg:block">
      {buttons.map((button, index) => (
        <Button
          key={index}
          className={`highlighted ${isFit ? (more40 ? "text-dark" : "text-white") : "text-dark"} text-md ${
            splittedUrl === button.href.split("/")[1]
              ? "selected bg-main-blue text-white"
              : ""
          }`}
        >
          <a
            href={`${button.href}`}
            className={`${
              splittedUrl === button.href.split("/")[1] ? "selected" : ""
            } font-normal`}
          >
            {button.title}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default MenuButtons;
