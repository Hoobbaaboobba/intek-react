import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getImages(albumId: string) {
  let images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/**/*.{jpeg,jpg,png, webp}",
  );

  images = Object.fromEntries(
    Object.entries(images).filter(([key]) => key.includes(albumId)),
  );

  const resolvedImages = await Promise.all(
    Object.values(images).map((image) => image().then((mod) => mod.default)),
  );

  return resolvedImages;
}
