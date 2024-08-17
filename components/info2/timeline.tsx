"use client";
import { motion } from "framer-motion";
import { timeLineDataArray, TimeLineData } from "./timeline.data";

export default function TimeLine() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {timeLineDataArray.map((el, idx) => (
        <TimeLineCard key={`${idx}-timeLineData`} timeLineData={el} />
      ))}
    </ol>
  );
}

function TimeLineCard({ timeLineData }: { timeLineData: TimeLineData }) {
  return (
    <li className="mb-10 ms-4">
      <motion.div
        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        transition={{
          ease: "easeIn",
          duration: 0.6,
        }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0.5, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        transition={{
          ease: "easeOut",
          duration: 0.6,
        }}
      >
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {timeLineData.time}
        </time>
        <h3 className="text-lg font-semibold text-gray-900">
          {timeLineData.title}
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {timeLineData.description}
        </p>
      </motion.div>
    </li>
  );
}

function LearnMoreButton() {
  return (
    <a
      href="#"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      Learn more{" "}
      <svg
        className="w-3 h-3 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  );
}
