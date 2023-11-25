import { ArrowDownCircle } from "lucide-react";
import { useState } from "react";

interface Props {
  src: string;
  text: string;
  altText: string;
}

const Card = ({ src, text, altText }: Props) => {
  const [info, setInfo] = useState(false);
  return (
    <div className="w-[280px] flex flex-col justify-center items-center relative rounded-lg">
      <div
        className={`${
          info ? "translate-y-[0]" : "translate-y-[100%]"
        } bg-light-orange h-[85%] bg-opacity-80 backdrop-blur-md p-6 transition duration-300 absolute bottom-[54px] left-0 flex justify-center items-center rounded-lg`}
      >
        <p className={`${info ? "opacity-100" : "opacity-0"}`}>{text}</p>
      </div>
      <img src={src} alt={altText} width="280" height="370" />
      <div
        className="w-full z-20 cursor-pointer bg-light-orange flex justify-center items-center py-4"
        onClick={() => setInfo((event) => !event)}
      >
        <ArrowDownCircle
          className={`${
            info ? "rotate-0" : "rotate-180"
          } text-main-orange transition duration-300`}
        />
      </div>
    </div>
  );
};

export default Card;
