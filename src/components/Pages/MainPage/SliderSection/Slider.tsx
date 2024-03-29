import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SliderCard from "./SliderCard";
import Autoplay from "embla-carousel-autoplay";

import Merlen from "../../../../assets/Merlen.webp";
import OBI from "../../../../assets/OBI.webp";
import Saturn from "../../../../assets/SaturnStroy.webp";

const slidersData = [
  {
    image: Merlen,
    alt: "Леруа Мерлен",
    title: "Сотруничество c Леруа Мерлен",
    description:
      "Компания ИНТЕК с гордостью объявляет о тесном сотрудничестве с ведущим розничным предприятием в области строительных и отделочных материалов — Леруа Марлен. Наше партнерство направлено на обеспечение клиентов высококачественными решениями в сфере информационных технологий, современной автоматизации и технической поддержки. Совместные усилия Интек и Леруа Марлен создают уникальные возможности для оптимизации бизнес-процессов, повышения эффективности и обеспечения наших клиентов инновационными решениями в динамично развивающемся рынке строительства и розничной торговли.",
  },
  {
    image: OBI,
    alt: "OBI",
    title: "Сотруничество c Леруа Мерлен",
    description:
      "Компания ИНТЕК с гордостью объявляет о тесном сотрудничестве с ведущим розничным предприятием в области строительных и отделочных материалов — Леруа Марлен. Наше партнерство направлено на обеспечение клиентов высококачественными решениями в сфере информационных технологий, современной автоматизации и технической поддержки. Совместные усилия Интек и Леруа Марлен создают уникальные возможности для оптимизации бизнес-процессов, повышения эффективности и обеспечения наших клиентов инновационными решениями в динамично развивающемся рынке строительства и розничной торговли.",
  },
  {
    image: Saturn,
    alt: "Сатурн Строй Маркет",
    title: "Сотруничество c Леруа Мерлен",
    description:
      "Компания ИНТЕК с гордостью объявляет о тесном сотрудничестве с ведущим розничным предприятием в области строительных и отделочных материалов — Леруа Марлен. Наше партнерство направлено на обеспечение клиентов высококачественными решениями в сфере информационных технологий, современной автоматизации и технической поддержки. Совместные усилия Интек и Леруа Марлен создают уникальные возможности для оптимизации бизнес-процессов, повышения эффективности и обеспечения наших клиентов инновационными решениями в динамично развивающемся рынке строительства и розничной торговли.",
  },
];

const Slider = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {slidersData.map((slider, index) => (
          <CarouselItem key={index}>
            <SliderCard
              image={slider.image.src}
              alt={slider.alt}
              title={slider.title}
              description={slider.description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
