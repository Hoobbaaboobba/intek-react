import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const AwardDialog = ({
  children,
  image,
  title,
}: {
  children: React.ReactNode;
  image?: string;
  title?: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="h-[150px] w-[150px]">{children}</div>
      </DialogTrigger>
      <DialogContent className="flex min-h-[300px] min-w-[200px] items-center justify-center">
        <img src={image} alt={title} />
      </DialogContent>
    </Dialog>
  );
};
