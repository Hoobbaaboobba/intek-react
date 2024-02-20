import { data } from "productsData";
import { Suspense, useEffect, useState, useTransition } from "react";
import { ContentCard } from "./ContentCard";
import { Loader2 } from "lucide-react";

export const ContentList = () => {
  const [query, setQuery] = useState<string | null>();
  const [newQuery, setNewQuery] = useState<string | null>();
  const [isPending, startTransition] = useTransition();
  const [items, setItems] = useState<any[]>();

  useEffect(() => {
    const urlSearchParamsLabel = new URLSearchParams(
      window.location.search,
    ).get("label");
    const urlSearchParamsNew = new URLSearchParams(window.location.search).get(
      "new",
    );
    setQuery(urlSearchParamsLabel);
    setNewQuery(urlSearchParamsNew);

    startTransition(() => {
      setItems(data);
    });
  }, []);

  return (
    <div className="flex w-full items-center justify-center py-8">
      {isPending ? (
        <div className="flex w-full items-center justify-center">
          <Loader2 className="animate-spin text-main-blue transition" />
        </div>
      ) : (
        <div className="grid w-full max-w-[1300px] grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-3">
          {items?.map((item) =>
            query ? (
              item.title.includes(query) && (
                <ContentCard
                  img={item.img}
                  title={item.title}
                  href={item.href}
                />
              )
            ) : (
              <ContentCard img={item.img} title={item.title} href={item.href} />
            ),
          )}
        </div>
      )}
    </div>
  );
};
