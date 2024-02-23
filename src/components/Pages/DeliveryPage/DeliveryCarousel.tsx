import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const textArr = [
  "Логистических затраты от транспортной компании до грузополучателя в стоимость товара не входит и оплачивается Покупателем.",
  "Покупатель самостоятельно выбирает транспортную компанию, через которую осуществляется перевозка груза до грузополучателя.",
  "Выбор варианта доставки согласовывается индивидуально. ",
];

export function DeliveryCarousel() {
  return (
    <Carousel className="h-[100px] w-full">
      <CarouselContent className="h-[100px]">
        {textArr.map((text, index) => (
          <CarouselItem key={index} className="h-full w-full">
            <div className="flex h-full items-center justify-center text-white">
              <span className="sm:text-md pl-4 pr-8 text-sm sm:pl-8 sm:pr-16 md:text-xl">
                {text}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
