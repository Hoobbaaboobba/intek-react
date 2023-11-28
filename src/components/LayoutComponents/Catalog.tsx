import { Button } from "../ui/button";
import CatalogButton from "./CatalogButton";
import { Separator } from "../ui/separator";

export const buttons = [
  {
    name: "Шпателя",
  },
  {
    name: "Кельмы",
  },
  {
    name: "Гладилки",
  },
  {
    name: "Терки",
  },
  {
    name: "Брус и сеткодержатель",
  },
];

const Catalog = () => {
  return (
    <div className="w-full justify-between items-center relative hidden lg:flex">
      <CatalogButton />
      <div className="py-4 flex">
        {buttons.map((button, index) => (
          <div key={index} className="flex justify-center items-center">
            <Button variant="link" size="lg" className="mx-2">
              {button.name}
            </Button>
            {index !== 4 && (
              <Separator
                orientation="vertical"
                className="h-2/3 w-1 rounded-md bg-black/60"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
