import Image from "next/image";
import logoImage from "../asserts/daylee-logo.png";

export default function TopInfo() {
  return (
    <div className="flex items-center justify-end">
      <div className="max-w-md">
        <div className="ml-0">
          <Image src={logoImage} width={600} height={500} alt="daylee Logo" />
        </div>
        <p className="text-md text-gray-700">
          Welcome to my Web Development Portofolio!
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-6 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Learn More
          </span>
        </button>
      </div>
    </div>
  );
}
