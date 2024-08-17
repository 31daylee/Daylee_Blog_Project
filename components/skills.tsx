import Image from "next/image";

export default function Skills() {
  return (
    <div className="container mx-auto mb-20 text-center">
      <p className="block antialiased text-base leading-relaxed text-blue-gray-900 mb-2 font-bold uppercase">
        My Tech Skills
      </p>
      {/* <h1 className="block antialiased tracking-normal text-5xl font-semibold leading-tight text-[#004aad] mb-4">
        What I do
      </h1> */}
      <div className="mx-auto w-1/2 md:w-1/3 lg:w-1/5">
        <Image
          src="/img/title-skills.png"
          layout="responsive"
          width={80}
          height={40}
          alt="title skills"
        />
      </div>
      <p className="block antialiased text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12 ">
        I am a passionate full stack developer eager to build scalable web
        applications using modern technologies.
      </p>
    </div>
  );
}
