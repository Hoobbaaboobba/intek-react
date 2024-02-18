import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const ImageDialog = ({
  children,
  image,
  title,
}: {
  children: React.ReactNode;
  image: string;
  title: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="aspect-3/4">{children}</DialogTrigger>
      <DialogContent className="aspect-3/4 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-full" />
      </DialogContent>
    </Dialog>
  );
};
