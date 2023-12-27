import { Separator } from "@/components/ui/separator";
import Logo from "./Logo";
import MenuButtons from "./MenuButtons";
import Contacts from "./Contacts";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

interface Props {
  url: any;
}

const Header = ({ url }: Props) => {
  const [navbar, setNavbar] = useState(false);

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
        navbar ? "lg:translate-y-[-40px]" : "lg:translate-y-0"
      } fixed left-0 top-0 z-30 flex w-full items-center justify-center bg-white/80 shadow-md backdrop-blur-lg transition`}
    >
      <div className="w-full px-8 py-4 lg:px-12">
        <Contacts />
        <Separator className="hidden lg:block" />
        <div className="flex w-full items-center justify-between lg:pt-2">
          <Logo />
          <MenuButtons url={url} />
          <div className="block lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
