import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const ImageDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="cursor-zoom-in rounded-none border transition hover:shadow-md">
          {children}
        </DialogTrigger>
        <DialogContent className="flex min-w-[350px] items-center justify-center overflow-hidden rounded-none">
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
};
