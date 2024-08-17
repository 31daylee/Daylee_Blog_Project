"use client";
import { useState } from "react";
import styles from "@/app/styles/project-rolling.module.css";
import Image from "next/image";

const projectImages = [
  { id: 1, img: "lotte", name: "Lotte ON" },
  { id: 2, img: "party", name: "Party Quest" },
  { id: 3, img: "mybank", name: "MyBank" },
  { id: 4, img: "nextfilm", name: "Nextfilm" },
];

const Rolling = () => {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.rolling_container}>
        <ul
          className={`${styles.rolling_wrapper} ${animate ? "" : styles.stop}`}
          onMouseEnter={onStop}
          onMouseLeave={onRun}
        >
          {projectImages.concat(projectImages).map((image) => (
            <li key={image.id} className={styles.image_container}>
              <div className={styles.item_div}>
                <Image
                  src={`/img/pro-${image.img}.png`}
                  alt={image.name}
                  className={styles.item_img}
                  width={520}
                  height={150}
                />
                <p className={styles.name}>{image.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rolling;
