import { MenuSquare } from "lucide-react";
import { Button } from "../ui/button";
import { buttons } from "./Catalog";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

const CatalogButton = () => {
  const [catalog, setCatalog] = useState(false);

  return (
    <>
      <Button
        onMouseEnter={() => setCatalog(true)}
        variant="default"
        size="lg"
        className="flex gap-2"
      >
        <MenuSquare />
        Каталог
      </Button>
      <div
        onMouseLeave={() => setCatalog(false)}
        className={`${
          catalog ? "opacity-100" : "opacity-0"
        } transition duration-300 absolute top-[60px] shadow-lg rounded-b-lg bg-white z-20 w-full flex p-4 h-[330px]`}
      >
        <div className="flex gap-1">
          <div className="flex flex-col justify-start items-start h-full gap-2">
            {buttons.map((btn, index) => (
              <Button
                key={index}
                variant="ghost"
                size="lg"
                className="w-full flex justify-start items-center"
              >
                {btn.name}
              </Button>
            ))}
          </div>
          <Separator orientation="vertical" />
        </div>
        <div className="grid grid-cols-3 gap-4 px-4 overflow-y-auto">
          <Skeleton className="w-[270px] h-[300px]" />
          <Skeleton className="w-[270px] h-[300px]" />
          <Skeleton className="w-[270px] h-[300px]" />
          <Skeleton className="w-[270px] h-[300px]" />
          <Skeleton className="w-[270px] h-[300px]" />
          <Skeleton className="w-[270px] h-[300px]" />
          <Skeleton className="w-[270px] h-[300px]" />
          <Skeleton className="w-[270px] h-[300px]" />
          <Skeleton className="w-[270px] h-[300px]" />
        </div>
      </div>
    </>
  );
};

export default CatalogButton;
