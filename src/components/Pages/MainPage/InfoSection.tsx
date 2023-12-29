import FirstText from "./FirstText";
import ImageContainer from "./ImageContainer";
import SecondText from "./SecondText";

const InfoSection = () => {
  return (
    <div className="z-10 grid max-w-[1300px] grid-cols-1 border-t-4 border-main-blue bg-white sm:mt-[90px] lg:grid-cols-2 xl:grid-cols-3">
      <ImageContainer />
      <FirstText />
      <SecondText />
    </div>
  );
};

export default InfoSection;
