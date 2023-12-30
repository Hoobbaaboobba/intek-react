import BlueSquare from "@/components/Global/BlueSquare";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  title: string;
  className?: string;
}

const CatalogItems = ({ src, title, className }: Props) => {
  return (
    <a
      href="/"
      className="group relative h-full w-full overflow-hidden border border-border"
    >
      <img
        src={`/images/${src}`}
        alt={title}
        className={cn("h-full w-full", className)}
      />
      <div className="text-md absolute bottom-0 left-0 flex h-[64px] w-[90%] cursor-pointer items-center justify-center border bg-white text-center text-dark-gray transition xl:-translate-x-[70%] xl:group-hover:translate-x-0">
        <div className="w-full p-2 text-center">{title}</div>
        <BlueSquare />
      </div>
    </a>
  );
};

export default CatalogItems;
