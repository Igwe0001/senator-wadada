import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt?: string;
  aspectRatio?: "portrait" | "landscape" | "square" | "tall";
}

interface GalleryGridProps {
  images?: (string | GalleryImage)[];
}

function normalizeImages(images: (string | GalleryImage)[]): GalleryImage[] {
  return images.map((img) => (typeof img === "string" ? { src: img } : img));
}

const aspectHeightMap: Record<string, string> = {
  portrait: "row-span-2",
  landscape: "row-span-1",
  square: "row-span-1",
  tall: "row-span-3",
  default: "row-span-1",
};

export default function GalleryGrid({ images = [] }: GalleryGridProps) {
  const normalized = normalizeImages(images);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 auto-rows-min">
      {normalized.map((img, index) => {
        const rowSpan = aspectHeightMap[img.aspectRatio ?? "default"];

        return (
          <div key={index} className={`relative w-full ${rowSpan} overflow-hidden group`}>
            <div className="relative w-full h-full min-h-[250px]">
              <Image src={img.src} alt={img.alt ?? `gallery-${index}`} fill className="object-cover group-hover:scale-105 transition duration-500" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
