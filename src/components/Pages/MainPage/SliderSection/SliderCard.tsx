import BlueSquare from "@/components/Global/BlueSquare.astro";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const SliderCard = ({
  image,
  title,
  description,
  alt,
}: {
  image: any;
  title: string;
  description: string;
  alt: string;
}) => {
  return (
    <div className="grid w-full grid-cols-1 xl:grid-cols-2">
      <div className="relative h-full w-full">
        <img src={image} alt={alt} className="h-full w-full bg-contain" />
        <a href="/">
          <div className="absolute bottom-0 left-0 flex h-[65px] w-full items-center justify-between bg-black/70 pl-4 text-white backdrop-blur-lg">
            <span className="text-xl font-semibold">
              Подробнее о наших партнёрах
            </span>
            <Button variant="square" size="square">
              <ChevronRight />
            </Button>
          </div>
        </a>
      </div>
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 bg-super-light-gray p-8 sm:p-12 md:gap-8 md:p-16">
        <h1 className="text-3xl font-semibold text-dark-gray md:text-5xl">
          {title}
        </h1>
        <p className="text-lg font-light text-dark-gray md:text-2xl">
          {description}
        </p>
        <button className="under text-xl font-bold text-dark-gray">
          Читать далее
        </button>
      </div>
    </div>
  );
};

export default SliderCard;
