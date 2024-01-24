import LogoImg from "../../../assets/blue-logo.webp";
import LogoWhite from "../../../assets/white-logo.png";

const Logo = ({ more40 }: { more40: boolean }) => {
  return (
    <a href="/">
      {more40 ? (
        <img src={LogoImg.src} alt="Синий логотип ИНТЕК" />
      ) : (
        <img src={LogoWhite.src} alt="Синий логотип ИНТЕК" />
      )}
    </a>
  );
};

export default Logo;
