import { ChevronRight } from "lucide-react";
import type { Data } from "types";

export const ContentCard = (item: Data) => {
  return (
    <a href={item.href} className="group h-full w-full border bg-white">
      <div className="relative flex h-full w-full items-center justify-center">
        <img src={`/${item.img}`} alt={item.title} className="aspect-[16/12]" />
        <div className="absolute bottom-0 left-0 flex h-[100px] w-full items-end">
          <div className="flex h-full w-3/4 items-center justify-center border-r border-t bg-white px-4">
            <h2 className="sm:text-md text-center text-sm text-dark-gray">
              {item.title}
            </h2>
          </div>
          <div className="flex h-[80px] w-[80px] items-center justify-center bg-main-blue text-white transition group-hover:bg-main-blue/80">
            <ChevronRight />
          </div>
        </div>
      </div>
    </a>
  );
};
