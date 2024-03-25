import LogoImg from "../../../assets/blue-logo.webp";
import LogoWhite from "../../../assets/white-logo.png";

interface LogoProps {
  more40?: boolean;
  isFit?: boolean;
}

const Logo = ({ more40, isFit }: LogoProps) => {
  return (
    <a href="/">
      {isFit ? (
        more40 ? (
          <img src={LogoImg.src} alt="Синий логотип ИНТЕК" width={180} />
        ) : (
          <img src={LogoWhite.src} alt="Белый логотип ИНТЕК" width={180} />
        )
      ) : (
        <img src={LogoImg.src} alt="Синий логотип ИНТЕК" width={180} />
      )}
    </a>
  );
};

export default Logo;
