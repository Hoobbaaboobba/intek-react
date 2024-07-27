import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import type { Product } from "types";

export const ProductSelector = ({
  data,
  current,
}: {
  data: Product[];
  current?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[290px] rounded-md border-main-blue"
        >
          {"Выбрать товар..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="max-h-[300px] overflow-y-auto p-0"
      >
        <Command>
          <CommandInput placeholder="Найти товар..." />
          <CommandEmpty>Такого товара нет.</CommandEmpty>
          <CommandGroup>
            {data.map((item, index) => (
              <CommandItem
                key={index}
                value={item.title}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {current === item.title && (
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      current === item.title ? "opacity-100" : "opacity-0",
                    )}
                  />
                )}
                <a href={`/${item.slug}`} className="h-full w-full">
                  {item.title}
                </a>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
