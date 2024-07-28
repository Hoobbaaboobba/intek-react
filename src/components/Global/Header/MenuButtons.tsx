import { Button } from "@/components/ui/button";

import {
  Home,
  LayoutGrid,
  Package,
  FileBox,
  BookOpenText,
  Globe,
  PhoneCall,
} from "lucide-react";

export const buttons = [
  {
    title: "Главная",
    href: "/",
    icon: <Home />,
  },
  {
    title: "Каталог",
    href: "/katalog-tovarov",
    icon: <LayoutGrid />,
  },
  {
    title: "Доставка",
    href: "/dostavka-i-oplata",
    icon: <Package />,
  },
  {
    title: "Партнеры",
    href: "/partnery",
    icon: <FileBox />,
  },
  {
    title: "О компании",
    href: "/o-kompanii",
    icon: <BookOpenText />,
  },
  {
    title: "Новости",
    href: "/novosty",
    icon: <Globe />,
  },
  {
    title: "Контакты",
    href: "/kontakt",
    icon: <PhoneCall />,
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
    <div className="hidden xl:block">
      {buttons.map((button, index) => (
        <Button
          asChild
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
