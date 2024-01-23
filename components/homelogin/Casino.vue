<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { getResultDataGameCasino, getImagePosterGame } from "~/services/result";
import "swiper/css";
// import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import SwiperCore, { Pagination } from "swiper/core"; // เพิ่มการนำเข้า SwiperCore และ Pagination

SwiperCore.use([Pagination]); // นำเข้า Pagination เพื่อให้ Swiper ใช้งาน

const { data: dataGameCasino } = await getResultDataGameCasino();
</script>
<template>
  <section class="h-80 mt-16">
    <div class="flex justify-between max-w-4xl h-10 m-auto">
      <p class="flex items-center">คาสิโน</p>
      <div class="flex">
        <NuxtLink to="/_lang/sport" class="flex justify-center">
          <UButton class="justify-center rounded-full w-32">ดูทั้งหมด</UButton>
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-between max-w-4xl m-auto mt-6">
      <Swiper
        :slidesPerView="5"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper"
      >
        <SwiperSlide
          v-for="item in dataGameCasino"
          :key="item.id"
          class="flex-col items-center flex justify-center"
        >
          <img
            :src="getImagePosterGame(item.providerName)"
            alt=""
            srcset=""
            class="w-36 h-56"
          />
          <p class="mt-1 text-sm">{{ item.providerName }}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
