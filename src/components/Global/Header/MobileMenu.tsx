import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Text } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { buttons } from "./MenuButtons";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex h-12 w-12 items-center justify-center bg-main-blue">
        <Text color="white" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center justify-start overflow-y-auto text-center">
        <ul className="flex flex-col gap-6 py-8">
          {buttons.map((button, index) => (
            <li className="flex gap-2 text-xl" key={index}>
              <span className="text-main-blue">{button.icon}</span>
              <a href={button.href}>{button.title}</a>
            </li>
          ))}
        </ul>
        <Separator />
        <div>
          Звоните нам:
          <a className="flex gap-1" href="tel:+7 (499) 290-02-58">
            <Phone className="text-main-blue" /> +7 (499) 290-02-58
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
