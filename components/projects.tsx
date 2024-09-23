import Rolling from "./project-rolling";

export default function Projects() {
  return (
    <div className="container mx-auto text-center">
      <p className="block antialiased text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12">
        From Concepts to Realities
      </p>
      <div className="relative flex items-center justify-center ">
        <hr className="absolute inset-6 border-t-2 border-[#004aad]" />
        <h1 className="relative text-6xl font-semibold text-[#004aad] px-4 bg-[#ffffff]">
          My Project
        </h1>
      </div>
      <h1 className="block antialiased tracking-normal text-6xl font-semibold leading-tight text-[#004aad]  mb-4">
        Highlights
      </h1>

      <Rolling />
    </div>
  );
}
