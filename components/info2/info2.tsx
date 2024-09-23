import ImageSwiper from "@/components/image-swiper";
import TimeLine from "./timeline";

export default function Introduction() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex w-full items-center">
        <div className="flex flex-row items-start max-w-full">
          <div className="mr-20 grow basis-0">
            <TimeLine />
          </div>
          <div className="w-[350px]">
            <ImageSwiper />
          </div>
        </div>
      </div>
    </div>
  );
}
