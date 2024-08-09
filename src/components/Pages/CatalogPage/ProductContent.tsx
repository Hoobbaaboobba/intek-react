import type { Product } from "types";
import { ProductSelector } from "./ProductSelector";
import { useEffect, useState } from "react";

interface ProductContentProps {
  code: string;
  id: string;
  title: string;
  amount: string;
  brutto: string;
  netto: string;
  width: string;
  height: string;
  length: string;
  cbm: string;
  fiveToOne: string;
  threeToFive: string;
  oneToThree: string;
  eightToOne: string;
  description: string;
  barcode: string;
  selectorData: Product[];
}

export const ProductContent = ({
  title,
  amount,
  brutto,
  width,
  height,
  length,
  description,
  selectorData,
}: ProductContentProps) => {
  const [query, setQuery] = useState<string | null>();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search).get(
      "q",
    );

    setQuery(urlSearchParams);
  }, []);
  return (
    <div className="w-full sm:min-w-[400px] lg:min-w-[650px]">
      <div
        className={`${query === "review" || query === null ? "flex" : "hidden"} flex-col items-start justify-between gap-8 text-dark-gray`}
      >
        <div className="h-full space-y-2">
          <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
          <p className="text-lg leading-6 text-black/60">{description}</p>
        </div>
        <ProductSelector data={selectorData} current={title} />
      </div>
      <ul
        className={`${query === "details" ? "flex" : "hidden"} h-full w-full flex-col gap-2`}
      >
        <li className="flex">
          <span className="dash">Шт./Уп.</span>
          <span className="order-2">{amount}</span>
        </li>
        <li className="flex">
          <span className="dash">Брутто</span>
          <span className="order-2">{parseFloat(brutto).toFixed(2)}</span>
        </li>
        <li className="flex">
          <span className="dash">Ширина</span>
          <span className="order-2">{parseFloat(width).toFixed(2)}</span>
        </li>
        <li className="flex">
          <span className="dash">Высота</span>
          <span className="order-2">{parseFloat(height).toFixed(2)}</span>
        </li>
        <li className="flex">
          <span className="dash">Длина</span>
          <span className="order-2">{parseFloat(length).toFixed(2)}</span>
        </li>
      </ul>
      <div className={`${query === "usage" ? "flex" : "hidden"}`}>
        <h2>Применение</h2>
      </div>
    </div>
  );
};
