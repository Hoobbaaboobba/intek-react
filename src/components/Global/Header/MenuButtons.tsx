import { Button } from "@/components/ui/button";

export const buttons = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Каталог",
    href: "/catalog",
  },
  {
    title: "Контакты",
    href: "/contacts",
  },
  {
    title: "Доставка",
    href: "/dostavka-i-oplata",
  },
  {
    title: "О компании",
    href: "/about",
  },
];

interface Props {
  url: any;
}

const MenuButtons = ({ url }: Props) => {
  const splittedUrl = url.split("/")[1];
  return (
    <div className="hidden lg:block">
      {buttons.map((button, index) => (
        <Button
          key={index}
          className={`highlighted ${
            splittedUrl === button.href.split("/")[1]
              ? "selected bg-main-blue text-white"
              : ""
          }`}
        >
          <a
            href={`${button.href}`}
            className={`${
              splittedUrl === button.href.split("/")[1] ? "selected" : ""
            }`}
          >
            {button.title}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default MenuButtons;
