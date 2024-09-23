"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollDownArrow from "./scroll-down-arrow";

export default function TopInfo() {
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    setAnimateImage(true);
  }, []);

  return (
    <div className="flex items-center mt-[180px] relative">
      <div className="w-full">
        <div
          className={`relative flex flex-col justify-center grow basis-0 transition-transform duration-2500 ease-out ${
            animateImage ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ maxWidth: "600px" }}
        >
          <p className="text-lg mb-4 font-bold">PORTOFOLIO</p>
          <div className="relative w-full h-40">
            {" "}
            {/* 배치 영역 */}
            <Image
              src="/img/d.png"
              layout="absolute"
              width={250}
              height={250}
              alt="daylee Logo"
              className="absolute left-0 top-1/4 transform translate-y-2"
            />
            <Image
              src="/img/a.png"
              layout="absolute"
              width={250}
              height={250}
              alt="daylee Logo"
              className="absolute left-1/4 top-0 transform translate-x-16" // 간격을 늘림
            />
            <Image
              src="/img/y.png"
              layout="absolute"
              width={250}
              height={250}
              alt="daylee Logo"
              className="absolute left-1/2 top-1/2 transform -translate-x-1/4 -translate-y-1/2 translate-x-12" // 간격을 늘림
            />
            <Image
              src="/img/l.png"
              layout="absolute"
              width={250}
              height={250}
              alt="daylee Logo"
              className="absolute left-3/4 top-0 transform translate-x-16" // 간격을 늘림
            />
            <Image
              src="/img/e.png"
              layout="absolute"
              width={250}
              height={250}
              alt="daylee Logo"
              className="absolute right-0 top-1/4 transform translate-y-2 translate-x-8" // 간격을 늘림
            />
            <Image
              src="/img/e.png"
              layout="absolute"
              width={250}
              height={250}
              alt="daylee Logo"
              className="absolute left-3/4 top-3/4 transform scale-125 translate-x-8" // 간격을 늘림
            />
          </div>
          <ul className="list-none p-0">
            <li className="border-b border-gray-400 py-2">
              <Link
                href="/"
                className="flex items-center transition-colors hover:text-blue-250"
              >
                ABOUT
              </Link>
            </li>
            <li className="border-b border-gray-400 py-2">
              <Link
                href="/blog"
                className="flex items-center transition-colors hover:text-blue-250"
              >
                BLOG
              </Link>
            </li>
            <li className="border-b border-gray-400 py-2">
              <Link
                href="/contact"
                className="flex items-center transition-colors hover:text-blue-250"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-16 pt-10 pb-[250px] flex justify-center">
          <ScrollDownArrow />
        </div>
      </div>
    </div>
  );
}
