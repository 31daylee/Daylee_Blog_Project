import Image from "next/image";

export default function Skills() {
  return (
    <div className="container mx-auto mb-20 text-center">
      <p className="block antialiased text-base leading-relaxed text-blue-gray-900 mb-2 font-bold uppercase">
        My Tech Skills
      </p>
      <h1 className="block antialiased tracking-normal text-5xl font-semibold leading-tight text-[#004aad] mb-4">
        What I do
      </h1>
      <p className="block antialiased text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12 ">
        I am a passionate full stack developer eager to build scalable web
        applications using modern technologies.
      </p>
    </div>
  );
}
