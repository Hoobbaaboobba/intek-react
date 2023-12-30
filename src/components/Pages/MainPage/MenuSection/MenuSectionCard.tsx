import { Separator } from "@/components/ui/separator";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
}

const MenuSectionCard = ({ src, title, description, href }: Props) => {
  return (
    <div className="flex w-full items-start justify-center">
      <a
        href={href}
        className="flex w-full max-w-[270px] flex-col items-start justify-start gap-2"
      >
        <img
          src={`/images/${src}`}
          alt={`${title} ИНТЕК`}
          className="h-[200px] w-[270px]"
        />
        <h1 className="under text-3xl text-dark-gray">{title}</h1>
        <p className="font-light text-dark-gray">{description}</p>
      </a>
    </div>
  );
};

export default MenuSectionCard;
