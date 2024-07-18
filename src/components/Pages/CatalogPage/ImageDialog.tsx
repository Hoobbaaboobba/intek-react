import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const ImageDialog = ({
  children,
}: {
  children: React.ReactNode;
  image: string;
  title: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-zoom-in rounded-md border transition hover:shadow-md ">
        {children}
      </DialogTrigger>
      <DialogContent className="flex min-h-[200px] min-w-[300px] items-center justify-center">
        {children}
      </DialogContent>
    </Dialog>
  );
};
