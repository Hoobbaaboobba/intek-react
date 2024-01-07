import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Text } from "lucide-react";
import Logo from "./Logo";
import { Separator } from "@/components/ui/separator";
import { buttons } from "./MenuButtons";
import SearchButton from "./SearchButton";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex h-12 w-12 items-center justify-center bg-main-blue">
        <Text color="white" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center justify-start overflow-y-auto text-center">
        <Logo />
        <Separator />
        <ul className="flex flex-col gap-6 py-8 text-dark-gray">
          {buttons.map((button, index) => (
            <li className="text-xl" key={index}>
              <a href={button.href}>{button.title}</a>
            </li>
          ))}
        </ul>
        <Separator />
        <SearchButton />
        <Separator />
        <div>
          <a href="tel:+7 (499) 290-02-58">
            Звоните нам: <br /> +7 (499) 290-02-58
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
