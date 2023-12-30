import BlueSquare from "@/components/Global/BlueSquare";
import CatalogItems from "./CatalogItems";

const items = [
  {
    title: "Шпатель фасадный Proff 150 мм",
    src: "shpatel-proff-150.png",
  },
  {
    title: "Шпатель фасадный Proff 150 мм",
    src: "shpatel-proff-150.png",
  },
  {
    title: "Шпатель фасадный Proff 150 мм",
    src: "shpatel-proff-150.png",
  },
  {
    title: "Шпатель фасадный Proff 150 мм",
    src: "shpatel-proff-150.png",
  },
  {
    title: "Шпатель фасадный Proff 150 мм",
    src: "shpatel-proff-150.png",
  },
  {
    title: "Шпатель фасадный Proff 150 мм",
    src: "shpatel-proff-150.png",
  },
  {
    title: "Шпатель фасадный Proff 150 мм",
    src: "shpatel-proff-150.png",
  },
  {
    title: "Шпатель фасадный Proff 150 мм",
    src: "shpatel-proff-150.png",
  },
];

const CatalogSection = () => {
  return (
    <div className="mt-[100px] flex w-full items-center justify-center px-8">
      <div className="flex w-full max-w-[1300px] flex-col gap-8">
        <div>
          <h1 className="text-4xl text-dark-gray">Наша продукция</h1>
          <h2 className="text-xl text-dark-gray">
            Самые актуальные инструменты по выгодным ценам.
          </h2>
          <a href="" className="under text-2xl font-semibold">
            Больше товаров
          </a>
        </div>
        <div className="gap grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-8">
          <a
            href="/"
            className="group relative h-full w-full overflow-hidden border border-border"
          >
            <img
              src={`/images/shpatel-proff-150.png`}
              alt="Шпатель фасадный Proff 150 мм"
              className="h-full w-full sm:h-[500px] sm:w-[700px]"
            />
            <div className="text-md absolute bottom-0 left-0 flex h-[64px] w-[90%] cursor-pointer items-center justify-center border bg-white text-center text-dark-gray transition sm:text-xl xl:-translate-x-[85%] xl:group-hover:translate-x-0">
              <div className="w-full p-2">Шпатель фасадный Proff 150 мм</div>
              <BlueSquare />
            </div>
          </a>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-8">
            {items.slice(0, 4).map((item) => (
              <CatalogItems src={item.src} title={item.title} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.slice(4, 8).map((item) => (
            <CatalogItems src={item.src} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogSection;
