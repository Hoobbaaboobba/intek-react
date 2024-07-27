import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import type { Data } from "types";

export const ContentCard = ({
  img,
  title,
  href,
}: {
  img: string;
  title: string;
  href: string;
}) => {
  return (
    <a href={href}>
      <Card className="group relative">
        <CardContent>
          <img
            src={`/${img}`}
            alt={title}
            className="aspect-[10/9] h-full w-full -translate-y-8 scale-75"
          />
        </CardContent>
        <CardFooter>
          <div className="absolute bottom-0 left-0 flex h-[100px] w-full items-end">
            <div className="flex h-full w-3/4 items-center justify-center rounded-l-md rounded-t-md border-r border-t bg-white px-4">
              <h3 className="sm:text-md text-center text-sm text-dark-gray">
                {title}
              </h3>
            </div>
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-r-md bg-main-blue text-white transition group-hover:bg-main-blue/80">
              <ChevronRight />
            </div>
          </div>
        </CardFooter>
      </Card>
    </a>
  );
};
