"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import styles from "@/app/styles/image-swiper.module.css";
export default function SwiperComponent() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.slide1} />
      <SwiperSlide className={styles.slide2} />
    </Swiper>
  );
}
