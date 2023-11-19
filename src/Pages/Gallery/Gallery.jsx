import { useLoaderData } from "react-router-dom";
import GalleryCard from "./GalleryCard";
import HelmetTitle from "../../Components/HelmetTitle";

const Gallery = () => {
  const galleryData = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto space-y-8">
      <HelmetTitle title={"Gallery"}></HelmetTitle>
      <div className="text-center">
        <h1 className="text-2xl  md:text-4xl  lg:text-5xl font-bold">
          Explore Our Spectacular Events{" "}
          <span className="text-[#FF037C]">Gallery</span>
        </h1>
      </div>
      <div className="font-medium text-gray-500 text-center">
        <p>
          Welcome to the heart of our creativity and expertise, where
          unforgettable moments come to life. Our gallery is a curated
          collection of some of the most enchanting events we've had the
          privilege of orchestrating. Each image tells a story of joy, elegance,
          and meticulous attention to detail. From dreamy weddings to vibrant
          corporate gatherings, our gallery showcases the diverse range of
          events we excel at planning and managing. Browse through these
          captivating snapshots and let them inspire your imagination for your
          own upcoming event. Whether you're envisioning an intimate celebration
          or a grand affair, we're here to bring your dreams to reality. Let
          these images be the starting point for your event's journey with
          Social Event Management. Contact us today to discuss how we can make
          your event truly special
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10 py-10 px-5">
        {galleryData.map((gallery) => (
          <GalleryCard key={gallery.id} gallery={gallery}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
