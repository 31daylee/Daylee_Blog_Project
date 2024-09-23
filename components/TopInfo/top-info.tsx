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
    <div
      className="flex items-center bg-custom-bg bg-cover bg-center" // Add your background image class here
      style={{ minHeight: "100vh" }} // Ensure the background covers the full section height
    >
      <div className="w-full">
        <div className="flex justify-evenly space-x-10 mt-[150px]">
          <div
            className={`relative flex flex-col justify-center grow basis-0 transition-transform duration-1000 ease-out ${
              animateImage ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ maxWidth: "600px" }}
          >
            <p className="text-lg mb-4 font-bold">PORTOFOLIO</p>
            <Image
              src="/img/name-logo.png"
              layout="responsive"
              width={400}
              height={200}
              alt="daylee Logo"
              className="object-cover w-full"
            />
            <ul className="list-none p-0">
              <li className="border-b border-gray-400 py-2">
                <Link
                  href="/about"
                  className="flex items-center transition-colors hover:text-white"
                >
                  ABOUT
                </Link>
              </li>
              <li className="border-b border-gray-400 py-2">
                <Link
                  href="/blog"
                  className="flex items-center transition-colors hover:text-white"
                >
                  BLOG
                </Link>
              </li>
              <li className="border-b border-gray-400 py-2">
                <Link
                  href="/contact"
                  className="flex items-center transition-colors hover:text-white"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="w-[350px]">
            {<Image
              src="/img/current-info.jpg"
              layout="responsive"
              width={200}
              height={200}
              alt="photo"
              className="object-cover w-full rounded-lg"
            /> }
          </div> */}
        </div>
        <div className="mt-16 pt-10 pb-[100px] flex justify-center">
          <ScrollDownArrow />
        </div>
      </div>
    </div>
  );
}
