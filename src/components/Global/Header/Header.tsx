import { Separator } from "@/components/ui/separator";
import MenuButtons, { buttons } from "./MenuButtons";
import Contacts from "./Contacts";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo.tsx";

interface Props {
  url: any;
}

const Header = ({ url }: Props) => {
  const [navbar, setNavbar] = useState(false);

  const isFit = buttons
    .map((e) => e.href.split("/")[1])
    .includes(url.split("/")[3]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
  });
  return (
    <header
      className={`${
        navbar ? "bg-white/80 lg:translate-y-[-50px]" : "lg:translate-y-0"
      } } fixed left-0 top-0 z-30 flex w-full items-center 
      justify-center bg-transparent shadow-md backdrop-blur-lg transition`}
    >
      <div className="w-full px-8 py-4 lg:px-12">
        <Contacts isFit={isFit} />
        <Separator
          className={`hidden ${isFit ? "bg-white/20" : "text-slate-700"} lg:block`}
        />
        <div className="flex w-full items-center justify-between lg:pt-4">
          <Logo more40={navbar} isFit={isFit} />
          <MenuButtons more40={navbar} isFit={isFit} url={url} />
          <div className="block xl:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
