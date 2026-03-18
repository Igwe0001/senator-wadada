import Image from "next/image";

interface GalleryGridProps {
    images?: string[];
}

export default function GalleryGrid({ images = [] }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {images.map((img, index) => (
        <div key={index} className="relative w-full h-[250px] overflow-hidden">
          <Image src={img} alt={`gallery-${index}`} fill className="object-cover hover:scale-105 transition duration-500" />
        </div>
      ))}
    </div>
  );
}
