<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
const photos = [
  "theam-valorant.png",
  "theme-rov.png",
  "theme-ragnarok.png",
  "theme-god-of-war.png",
  "theme-hon.png",
];
</script>
<template>
  <main class="flex justify-center">
    <Swiper>
      <SwiperSlide v-for="photo in photos" :key="photo.id" class="relative">
        <img :src="`${photo}`" alt="" class="max-w-auto m-auto w-full" />
      </SwiperSlide>
    </Swiper>
  </main>
</template>
