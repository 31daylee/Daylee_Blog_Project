import Image from "next/image";
import ImageSwiper from "../components/image-swiper";
import infoPastImage from "../asserts/past-info.jpg";
import TimeLine from "./timeline";

export default function Introduction() {
  return (
    <div className="flex items-center my-40">
      {/* Container for text and image */}
      <div className="flex flex-row items-start justify-between max-w-full">
        {/* Text section */}
        <div className="max-w-md mr-20">
          <TimeLine />
        </div>
        <div className="flex-shrink-0">
          <ImageSwiper />
        </div>
      </div>
    </div>
  );
}
