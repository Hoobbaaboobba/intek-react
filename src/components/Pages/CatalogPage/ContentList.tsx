import { data } from "productsData";
import { useEffect, useState } from "react";
import { ContentCard } from "./ContentCard";
import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export const ContentList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState<string | null>();
  const [_, setNewQuery] = useState<string | null>();
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
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
    <div className="flex w-full items-center justify-center px-8 py-8">
      <div className="grid w-full max-w-[1300px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <>
            <Skeleton className="aspect-[10/8] w-full" />
            <Skeleton className="aspect-[10/8] w-full" />
            <Skeleton className="aspect-[10/8] w-full" />
            <Skeleton className="aspect-[10/8] w-full" />
            <Skeleton className="aspect-[10/8] w-full" />
            <Skeleton className="aspect-[10/8] w-full" />
          </>
        ) : (
          data.map((item, index) =>
            query ? (
              item.title.includes(query) && (
                <ContentCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  href={item.href}
                />
              )
            ) : (
              <ContentCard
                key={index}
                img={item.img}
                title={item.title}
                href={item.href}
              />
            ),
          )
        )}
      </div>
    </div>
  );
};
