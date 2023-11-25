import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const SuperButton = ({ children }: Props) => {
  const [message, setMessage] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={() => setMessage(true)}
        className="bg-black rounded-sm hover:bg-black/80 transition text-white flex justify-center items-center py-3 cursor-pointer"
      >
        {children}
      </div>
      <div
        className={`${
          message ? "block" : "hidden"
        } text-4xl text-rose-400 font-bold`}
      >
        Hello
      </div>
    </div>
  );
};

export default SuperButton;
