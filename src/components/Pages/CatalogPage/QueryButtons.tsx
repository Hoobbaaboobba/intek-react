import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

export const QueryButtons = () => {
  const [query, setQuery] = useState<string | null>();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search).get(
      "q",
    );

    setQuery(urlSearchParams);
  }, []);

  return (
    <>
      <Button
        size="icon"
        className="h-8 w-8 rounded-none bg-main-blue text-white"
        asChild
      >
        <a href="/katalog-tovarov">
          <ChevronLeft />
        </a>
      </Button>
      <a
        href="?q=review"
        className={`${
          query === "review" || query === null ? "under" : "opacity-50"
        } py-1 text-lg transition hover:opacity-100`}
      >
        Обзор
      </a>
      <a
        href="?q=details"
        className={`${
          query === "details" ? "under" : "opacity-50"
        } py-1 text-lg transition hover:opacity-100`}
      >
        Техническая информация
      </a>
      <a
        href="?q=usage"
        className={`${
          query === "usage" ? "under" : "opacity-50"
        } py-1 text-lg transition hover:opacity-100`}
      >
        Применение
      </a>
    </>
  );
};
