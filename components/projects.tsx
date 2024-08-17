import Image from "next/image";
import Rolling from "./project-rolling";

export default function Projects() {
  return (
    <div className="container mx-auto text-center mt-20 my-20">
      {/* <h1 className="block antialiased tracking-normal text-5xl font-semibold leading-tight text-[#004aad]  mb-4">
        My Projects
      </h1> */}
      <div className="mx-auto w-1/2 md:w-1/3 lg:w-1/5">
        <Image
          src="/img/title-project.png"
          layout="responsive"
          width={90}
          height={40}
          alt="title skills"
        />
      </div>
      <p className="block antialiased text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12">
        I am a passionate full stack developer eager to build scalable web
        applications using modern technologies.
      </p>
      <Rolling />
    </div>
  );
}
