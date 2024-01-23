import { Separator } from "@/components/ui/separator";
import { QuoteIcon } from "lucide-react";

const ReviewsCard = ({ review, name }: { review: string; name: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-[1300px] flex-col items-center justify-center gap-4 px-4 text-center text-dark-gray">
        <QuoteIcon className="h-8 w-8 text-main-blue" />
        <p className="text-2xl font-light">{review}</p>
        <div className="flex flex-col items-center justify-center">
          <Separator className="my-1 h-[2px] w-full bg-main-blue" />
          <span className="text-lg">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
