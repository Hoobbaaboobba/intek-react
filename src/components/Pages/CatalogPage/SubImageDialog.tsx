import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const SubImageDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger className="h-[150px] w-[150px] cursor-zoom-in rounded-md border transition hover:shadow-md ">
        {children}
      </DialogTrigger>
      <DialogContent className="flex h-[300px] w-[300px] items-center justify-center overflow-hidden md:h-[600px] md:w-[600px]">
        {children}
      </DialogContent>
    </Dialog>
  );
};
