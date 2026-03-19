import { assets } from "@/assets/assets";
import GalleryGrid from "@/components/pages/home/GalleryGrid";

export default function MediaPage() {
  const images: string[] = [
    assets.image16.src,
    assets.image17.src,
    assets.image18.src,
    assets.image19.src,
    assets.image20.src,
    assets.image21.src,
    assets.image22.src,
    assets.image23.src,
    assets.image24.src,
    assets.image25.src,
    assets.image26.src,
    assets.image27.src,
    assets.image28.src,
    assets.image29.src,
    assets.image30.src,
    assets.image31.src,
    assets.image32.src,
    assets.image33.src,
    assets.image34.src,
    assets.image35.src,
    assets.image36.src,
    assets.image37.src,
    assets.image38.src,
    assets.image39.src,
    assets.image40.src,
    assets.image41.src,
    assets.image42.src,
    assets.image43.src,
    assets.image44.src,
    assets.image45.src,
    assets.image46.src,
    assets.image47.src,
    assets.image48.src,
    assets.image49.src,
    assets.image50.src,
    assets.image51.src,
    assets.image52.src,
  ];

  return (
    <main className="bg-[#031B2B] min-h-screen pt-32 pb-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="bg-white/10 text-white text-xs px-4 py-1 rounded-full">Media & Gallery</span>

        <h1 className="text-3xl md:text-4xl font-semibold text-white mt-4 leading-snug">
          In the <span className="text-blue-400">Field</span>, In the <span className="text-blue-400">Chamber</span>, In the{" "}
          <span className="text-blue-400">Community</span>
        </h1>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto">
        <GalleryGrid images={images} />
      </div>
    </main>
  );
}
