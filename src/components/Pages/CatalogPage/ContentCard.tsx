import { ChevronRight } from "lucide-react";
import type { Data } from "types";
import Image from "../../../assets/shpatel-proff-150.png";

export const ContentCard = (item: Data) => {
  return (
    <a href={item.href} className="hover: group w-full border bg-white">
      <div className="aspect-2/3 relative">
        <img src={Image.src} alt="шпатель" />
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
