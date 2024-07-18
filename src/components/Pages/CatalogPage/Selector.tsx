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
import { useEffect, useState } from "react";

const select = [
  "Шпатель",
  "Гладилка",
  "Сеткодержатель",
  "Брус для шлифования",
  "Терочная доска",
  "Терка",
  "Полутерок",
  "Кисть",
  "Щетка",
  "Кельма",
  "Набор",
];

export const Selector = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [query, setQuery] = useState<string | null>();
  const [_, setNewQuery] = useState<string | null>();

  useEffect(() => {
    const urlSearchParamsLabel = new URLSearchParams(
      window.location.search,
    ).get("label");
    const urlSearchParamsNew = new URLSearchParams(window.location.search).get(
      "new",
    );
    setQuery(urlSearchParamsLabel);
    setNewQuery(urlSearchParamsNew);
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between rounded-md"
        >
          {query ? query : "Выбрать товар..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="max-h-[300px] overflow-y-auto p-0 sm:w-[400px] md:w-[700px]"
      >
        <Command>
          <CommandInput placeholder="Найти товар..." />
          <CommandEmpty>Такого товара нет.</CommandEmpty>
          <CommandGroup>
            {select.map((item, index) => (
              <CommandItem
                key={index}
                value={item}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    item === value ? "opacity-100" : "opacity-0",
                  )}
                />
                <a href={`?label=${item}`} className="h-full w-full">
                  {item}
                </a>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
