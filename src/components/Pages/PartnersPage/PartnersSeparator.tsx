import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

export const PartnersSeparator = () => {
  const [isSep, setIsSep] = useState(false);

  useEffect(() => {
    const anim = setTimeout(() => {
      setIsSep(true);
    }, 200);

    return () => clearTimeout(anim);
  }, []);
  return (
    <Separator
      className={`${isSep ? "scale-100" : "scale-0"} w-full max-w-[1300px] bg-main-blue transition duration-1000`}
    />
  );
};
