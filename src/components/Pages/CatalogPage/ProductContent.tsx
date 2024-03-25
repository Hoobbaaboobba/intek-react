import type { Product } from "types";
import { ProductSelector } from "./ProductSelector";
import { useEffect, useState } from "react";

interface ProductContentProps {
  image: string;
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
  image,
  code,
  id,
  title,
  amount,
  brutto,
  netto,
  width,
  height,
  length,
  cbm,
  fiveToOne,
  threeToFive,
  oneToThree,
  eightToOne,
  description,
  barcode,
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
    <div className="w-full">
      {(query === "review" || query === null) && (
        <div className="flex flex-col items-start justify-between gap-8 text-dark-gray">
          <div className="h-full space-y-2">
            <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
            <p className="text-sm">{description}</p>
          </div>
          <ProductSelector data={selectorData} current={title} />
        </div>
      )}
      {query === "details" && (
        <ul className="flex h-full w-full flex-col gap-2">
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
          <li className="flex">
            <span className="dash">CBM, m3</span>
            <span className="order-2">{parseFloat(cbm)}</span>
          </li>
          <li className="flex">
            <span className="dash">500-1 мл.р.</span>
            <span className="order-2">{parseFloat(fiveToOne).toFixed(2)}</span>
          </li>
          <li className="flex">
            <span className="dash">300-500 т.р.</span>
            <span className="order-2">
              {parseFloat(threeToFive).toFixed(2)}
            </span>
          </li>
          <li className="flex">
            <span className="dash">150-300 т.р.</span>
            <span className="order-2">{parseFloat(oneToThree).toFixed(2)}</span>
          </li>
          <li className="flex">
            <span className="dash">80-150 т.р. САМОВЫВОЗ</span>
            <span className="order-2">{parseFloat(eightToOne).toFixed(2)}</span>
          </li>
        </ul>
      )}
    </div>
  );
};
