import { data } from "productsData";
import { useEffect, useState } from "react";
import { ContentCard } from "./ContentCard";

export const ContentList = () => {
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
    <div className="flex w-full items-center justify-center px-8 py-8">
      <div className="grid w-full max-w-[1300px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((item, index) =>
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
        )}
      </div>
    </div>
  );
};
