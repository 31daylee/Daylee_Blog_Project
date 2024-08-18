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
    <div className="flex items-center mt-[180px]">
      <div className="w-full">
        <div className="flex justify-evenly space-x-10">
          <div
            className={`relative flex flex-col justify-center grow basis-0 transition-transform duration-1000 ease-out ${
              animateImage ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ maxWidth: "600px" }}
          >
            <p className="text-lg mb-4 font-bold">PORTOFOLIO</p>
            <Image
              src="/img/title-name.png"
              layout="responsive"
              width={200}
              height={200}
              alt="daylee Logo"
              className="object-cover w-full"
            />
            <ul className="list-none p-0">
              <li className="border-b border-gray-400 py-2">
                <Link
                  href="/"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  ABOUT
                </Link>
              </li>
              <li className="border-b border-gray-400 py-2">
                <Link
                  href="/blog"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  BLOG
                </Link>
              </li>
              <li className="border-b border-gray-400 py-2">
                <Link
                  href="
                /contact"
                  className="flex items-center transition-colors hover:text-blue-500"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[350px]">
            <Image
              src="/img/current-info.jpg"
              layout="responsive"
              width={200}
              height={200}
              alt="photo"
              className="object-cover w-full rounded-lg"
            />
          </div>
        </div>
        <div className="mt-16 pt-10 flex justify-center">
          <ScrollDownArrow />
        </div>
      </div>
    </div>
  );
}
