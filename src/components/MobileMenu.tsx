import { Home } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    name: "Главная",
    href: "/",
  },
];

const MobileMenu = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white px-4 py-1 z-30 lg:hidden fixed bottom-0 left-0 gap-6">
      {buttons.map((button) => (
        <div className="flex flex-col justify-center items-center gap-1">
          <Button variant="black" size="icon">
            <a
              href={`${button.href}`}
              className="flex flex-col justify-center items-center"
            >
              <Home />
            </a>
          </Button>
          <span>{button.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
