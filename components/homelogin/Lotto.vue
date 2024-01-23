<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { getResultDataGameLotto, getImagePosterGame } from "~/services/result";
import "swiper/css";

const { data: dataGameLotto } = await getResultDataGameLotto();
</script>
<template>
  <section class="h-80 mt-16">
    <div class="flex justify-between max-w-4xl h-10 m-auto">
      <p class="flex items-center">หวยออนไลน์</p>
      <div class="flex">
        <NuxtLink to="/_lang/sport" class="flex justify-center">
          <UButton class="justify-center rounded-full w-32">ดูทั้งหมด</UButton>
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-between max-w-4xl m-auto mt-6">
      <span
        v-for="item in dataGameLotto"
        :key="item.id"
        class="flex-col items-center flex justify-center"
      >
        <img
          :src="getImagePosterGame(item.providerName)"
          alt=""
          srcset=""
          class="w-36 h-56"
        />
        <p class="mt-1">{{ item.providerName }}</p>
      </span>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
