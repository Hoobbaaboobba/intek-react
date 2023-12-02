interface Props {
  linkName: string;
}

const LinkRoad = ({ linkName }: Props) => {
  return (
    <div className="text-lg text-middle-gray flex gap-2 z-20">
      <a href="/">Главная</a> &gt;
      <a href="">{linkName}</a>
    </div>
  );
};

export default LinkRoad;
