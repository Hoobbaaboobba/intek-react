import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export const SwitchModal = () => {
  const [query, setQuery] = useState<string | null>("");

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search).get(
      "label",
    );
    setQuery(urlSearchParams);
  }, []);

  const setQueryParams = (params: any) => {
    const url = new URL(window.location.href);
    Object.keys(params).forEach((key) =>
      url.searchParams.set(key, params[key]),
    );
    window.history.pushState({}, "", url);
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="new"
        onCheckedChange={(event) =>
          setQueryParams({ label: query, new: event })
        }
      />
      <Label htmlFor="new">Новинки</Label>
    </div>
  );
};
