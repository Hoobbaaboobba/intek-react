import { Separator } from "@/components/ui/separator";
import MenuButtons from "./MenuButtons";
import Contacts from "./Contacts";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo.tsx";

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
      } fixed left-0 top-0 z-30 flex w-full items-center justify-center ${
        navbar ? "bg-white/80" : "bg-black/20"
      } shadow-md backdrop-blur-lg transition`}
    >
      <div className="w-full px-8 py-4 lg:px-12">
        <Contacts more40={navbar} />
        <Separator className="hidden opacity-30 lg:block" />
        <div className="flex w-full items-center justify-between lg:pt-4">
          <Logo more40={navbar} />
          <MenuButtons url={url} more40={navbar} />
          <div className="block lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
