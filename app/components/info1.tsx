import Image from "next/image";
import infoImage from "../asserts/current-info.jpg";

export default function Introduction() {
  return (
    <div className="flex items-center my-20">
      <div className="ml-0 mx-20">
        <Image
          src={infoImage}
          width={400}
          height={400}
          alt="info1"
          className="rounded-lg"
        />
      </div>
      <div className="max-w-md">
        <h1 className="text-3xl text-blue-gray-700 font-bold">안녕하세요</h1>
        <h1 className="text-3xl text-blue-gray-700 font-bold">
          풀스택 개발자 <strong className="text-[#37447E] ">이현정</strong>{" "}
          입니다.
        </h1>

        <p className="text-md text-gray-700">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <p className="text-md text-gray-700">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <p className="text-md text-gray-700">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </div>
    </div>
  );
}
