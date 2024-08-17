"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const container: Variants = {
  standBy: {
    scaleX: 0.2,
  },
  onView: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      delayChildren: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const item: Variants = {
  standBy: {
    y: 200,
  },
  onView: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Introduction() {
  return (
    <motion.div
      className={
        "relative container mx-auto sm:h-[300px] w-full flex flex-col justify-center mt-[350px] px-16 py-10 text-black bg-black opacity-80"
      }
      variants={container}
      initial="standBy"
      whileInView={"onView"}
      viewport={{ once: true }}
    >
      <Image
        src={"/img/banner.jpg"}
        alt="background image for info rounded-custom"
        className="object-cover -z-10 ro"
        sizes={"50vw"}
        priority
        fill={true}
      />
      <div className="p-10">
        <div className="flex w-full border-b-2 border-[#ffffff] pb-3">
          <div className="grow basis-0 text-2xl">
            <p>안녕하세요</p>
            <p>
              풀스택 개발자 <strong>이현정</strong>입니다.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end pt-3">
          <p>
            고객의 요구를 이해하고 반영하는 데 중점을 두며 개발하고 있습니다.
          </p>
          <p>
            프론트엔드와 백엔드에서의 기술적 역량으로 직관적이고 매력적인 웹
            애플리케이션을 개발합니다.
          </p>
          <p>
            협업과 커뮤니케이션을 통해, 시용자의 니즈를 정확히 반영한 솔루션을
            제공합니다.
          </p>
        </div>
        <a
          href="https://2206.notion.site/16dd794421904e48a0cac9115a306678"
          target="_blank"
          className="w-[300px] text-sm flex items-end hover:underline text-[#6B7280]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 24 24"
            width="18px"
            fill="#6B7280"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </svg>
          &nbsp;더 알고싶어요!
        </a>
      </div>
    </motion.div>
  );
}
