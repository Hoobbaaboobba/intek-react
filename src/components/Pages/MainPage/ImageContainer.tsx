import BlueSquare from "@/components/Global/BlueSquare";
import { Button } from "@/components/ui/button";

const ImageContainer = () => {
  return (
    <div className="relative">
      <img
        src="/images/two-people.png"
        alt="Дискуссия двух людей"
        className="h-full w-full"
      />
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-black/70 pl-4 text-white backdrop-blur-lg">
        <span className="text-xl font-semibold">Больше об «ИНТЕК»</span>
        <BlueSquare />
      </div>
    </div>
  );
};

export default ImageContainer;
