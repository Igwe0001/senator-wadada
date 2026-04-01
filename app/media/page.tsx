import { assets } from "@/assets/assets";
// import GalleryGrid from "@/components/pages/home/GalleryGrid";
import GalleryGrid, { type GalleryImage } from "@/components/pages/home/GalleryGrid";

export default function MediaPage() {
  const developmentProjects: GalleryImage[] = [
    { src: assets.image54.src, aspectRatio: "tall" },
    { src: assets.image55.src, aspectRatio: "tall" },
    { src: assets.image56.src },
    { src: assets.image57.src },
    { src: assets.image58.src, aspectRatio: "tall" },
    { src: assets.image59.src },
    { src: assets.image60.src, aspectRatio: "tall" },
    { src: assets.image61.src, aspectRatio: "tall" },
    { src: assets.image62.src, aspectRatio: "tall" },
    { src: assets.image63.src },
    { src: assets.image64.src },
    { src: assets.image65.src },
    { src: assets.image66.src },
    { src: assets.image67.src, aspectRatio: "tall" },
    { src: assets.image68.src },
    { src: assets.image69.src, aspectRatio: "tall" },
    { src: assets.image70.src },
    { src: assets.image71.src },
    { src: assets.image72.src },
    { src: assets.image73.src, aspectRatio: "tall" },
    { src: assets.image75.src, aspectRatio: "tall" },
    { src: assets.image74.src, aspectRatio: "tall" },
  ]; 
  
  const communityEngagement: GalleryImage[] = [{ src: assets.image76.src }, { src: assets.image77.src }, { src: assets.image78.src }];

  const images: GalleryImage[] = [
    { src: assets.image79.src },
    { src: assets.image80.src },
    { src: assets.image81.src },
    { src: assets.image82.src, aspectRatio: "tall" },
    { src: assets.image83.src },
    { src: assets.image85.src, aspectRatio: "tall" },
    { src: assets.image84.src },
    { src: assets.image16.src },
    { src: assets.image16.src },
    { src: assets.image17.src },
    { src: assets.image18.src },
    { src: assets.image19.src },
    { src: assets.image20.src },
    { src: assets.image21.src },
    { src: assets.image22.src },
    { src: assets.image23.src },
    { src: assets.image24.src },
    { src: assets.image25.src },
    { src: assets.image26.src },
    { src: assets.image27.src },
    { src: assets.image28.src },
    { src: assets.image29.src },
    { src: assets.image30.src },
    { src: assets.image31.src },
    { src: assets.image32.src },
    { src: assets.image33.src },
    { src: assets.image34.src },
    { src: assets.image35.src },
    { src: assets.image36.src },
    { src: assets.image37.src },
    { src: assets.image38.src },
    { src: assets.image39.src },
    { src: assets.image40.src },
    { src: assets.image41.src },
    { src: assets.image42.src },
    { src: assets.image43.src },
    { src: assets.image44.src },
    { src: assets.image45.src },
    { src: assets.image46.src },
    { src: assets.image47.src },
    { src: assets.image48.src },
    { src: assets.image49.src },
    { src: assets.image50.src },
    { src: assets.image51.src },
    { src: assets.image52.src },
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
        <h1 className="my-4 text-2xl text-white ">Community Outreach</h1>
        <GalleryGrid images={developmentProjects} />
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="my-4 text-2xl text-white ">Community Engagement</h1>
        <GalleryGrid images={communityEngagement} />
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="my-4 text-2xl text-white ">Public Appearances & Events</h1>
        <GalleryGrid images={images} />
      </div>
    </main>
  );
}
