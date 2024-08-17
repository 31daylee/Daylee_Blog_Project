import ImageSwiper from "@/components/image-swiper";
import TimeLine from "./timeline";

export default function Introduction() {
  return (
    <div className="flex w-full items-center mb-[300px]">
      <div className="flex flex-row items-start max-w-full">
        <div className="mr-20 grow basis-0">
          <TimeLine />
        </div>
        <div className="w-[350px]">
          <ImageSwiper />
        </div>
      </div>
    </div>
  );
}
