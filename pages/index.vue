<script setup lang="ts">
// import Promotion from "~/components/homelogin/Promotion.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import {
  getResultDataGameSport,
  getImagePosterGame,
  getResultDataGameHits,
  getResultDataGameCasino,
  getResultDataGameSlot,
  getResultDataGameLotto,
} from "~/services/result";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]); // นำเข้า Pagination เพื่อให้ Swiper ใช้งาน

const { data: dataGameSport } = await getResultDataGameSport();
const { data: dataGameHits } = await getResultDataGameHits();
const { data: dataGameCasino } = await getResultDataGameCasino();
const { data: dataGameSlot } = await getResultDataGameSlot();
const { data: dataGameLotto } = await getResultDataGameLotto();

// onMounted(async () => {
//   dataGameSport.value = (await getResultDataGameSport()).data;

//   watch(dataGameSport, (newVal, oldVal) => {
//     console.log("dataGameSport changed:", newVal, oldVal);
//   });
// });
</script>
<template>
  <!-- <div>
    <Banner />
  </div> -->
  <main>
    <div class="flex justify-between max-w-4xl m-auto mt-6">
      <UButton
        class="mr-4 bg-white shadow-md w-32 h-32 rounded-lg flex-col items-center justify-center"
      >
        <img src="~/assets/menu/image 257.png" alt="หน้าหลัก" srcset="" />
        <p class="text-green-500 mt-2">หน้าหลัก</p>
      </UButton>

      <UButton
        class="mr-4 flex bg-white shadow-md w-32 h-32 rounded-lg flex flex-col items-center justify-center"
      >
        <img
          class=""
          src="~/assets/menu/image 259.png"
          alt="ซื้อรหัสเกม"
          srcset=""
        />
        <p class="text-green-500 mt-2">ซื้อรหัสเกม</p>
      </UButton>
      <UButton
        class="mr-4 bg-white shadow-md w-32 h-32 rounded-lg flex flex-col items-center justify-center"
      >
        <img src="~/assets/menu/image 255.png" alt="" srcset="" />
        <p class="text-green-500 mt-2">เติมเกมส์</p>
      </UButton>
      <UButton
        class="mr-4 bg-white shadow-md w-32 h-32 rounded-lg flex flex-col items-center justify-center"
      >
        <img src="~/assets/menu/Frame 4953.png" alt="" srcset="" />
        <p class="text-green-500 mt-2">ซื้อบัตรเติมเงิน</p>
      </UButton>
      <UButton
        class="mr-4 bg-white shadow-md w-32 h-32 rounded-lg flex flex-col items-center justify-center"
      >
        <img
          class=""
          src="~/assets/menu/image 251.png"
          alt="โปรโมชั่น"
          srcset=""
        />
        <p class="text-green-500 mt-2">โปรโมชั่น</p>
      </UButton>
      <UButton
        class="bg-white shadow-md w-32 h-32 rounded-lg flex-col items-center justify-center"
      >
        <img src="~/assets/menu/image 258.png" alt="วิธีสั่งซื้อ" srcset="" />
        <p class="text-green-500 mt-2">วิธีสั่งซื้อ</p>
      </UButton>
    </div>
    <template>
      <section class="h-80 mt-6">
        <div class="flex justify-between max-w-4xl h-10 m-auto mt-6">
          <p class="flex items-center">5 เกมยอดฮิต</p>
          <div class="flex"></div>
        </div>
        <div class="flex justify-between max-w-4xl m-auto mt-6">
          <span
            v-for="item in dataGameHits"
            :key="item.id"
            class="flex-col items-center flex justify-center"
          >
            <div class="relative flex-col items-center flex justify-center">
              <img :src="item.image" alt="" srcset="" class="w-36 h-44" />
              <div
                class="rounded-3xl flex-col items-center flex justify-center w-full h-full hover:opacity-100 opacity-0 absolute bg-hover"
              >
                <UButton
                  icon="i-simple-line-icons-control-play"
                  size="2xs"
                  class="text-sm w-18 h-18 text-white m-auto btn btn-blue"
                  @click="handleButtonClick"
                >
                  เข้าเกม
                </UButton>
              </div>
            </div>
            <p class="mt-1">{{ item.game }}</p>
          </span>
        </div>
      </section>
    </template>
    <template>
      <section class="h-80 mt-16">
        <div class="flex justify-between max-w-4xl h-10 m-auto">
          <p class="flex items-center">เดิมพันกีฬา</p>
          <div class="flex">
            <NuxtLink to="/_lang/sport" class="flex justify-center">
              <UButton
                class="justify-center rounded-full w-32"
                @click="buttonPageSport"
                >ดูทั้งหมด</UButton
              >
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-between max-w-4xl m-auto mt-6">
          <Swiper
            :slidesPerView="5"
            :spaceBetween="20"
            :navigation="true"
            :pagination="{
              clickable: true,
            }"
            :mousewheel="true"
            :keyboard="true"
            class="mySwiper"
          >
            <SwiperSlide
              v-for="item in dataGameSport"
              :key="item.id"
              class="flex-col items-center flex justify-center"
            >
              <div class="relative flex-col items-center flex justify-center">
                <img
                  :src="getImagePosterGame(item.providerName)"
                  alt=""
                  srcset=""
                  class="rounded-lg w-36 h-44"
                />

                <div
                  class="rounded-lg flex-col items-center flex justify-center w-full h-full hover:opacity-100 opacity-0 absolute bg-hover"
                >
                  <UButton
                    icon="i-simple-line-icons-control-play"
                    size="2xs"
                    class="text-sm w-18 h-18 text-white m-auto btn btn-blue"
                    @click="handleButtonClick"
                  >
                    เข้าเกม
                  </UButton>
                </div>
              </div>
              <p class="mt-1 text-sm">{{ item.providerName }}</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </template>
    <template>
      <section class="h-80 mt-16">
        <div class="flex justify-between max-w-4xl h-10 m-auto">
          <p class="flex items-center">คาสิโน</p>
          <div class="flex">
            <NuxtLink to="/_lang/casino" class="flex justify-center">
              <UButton class="justify-center rounded-full w-32"
                >ดูทั้งหมด</UButton
              >
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-between max-w-4xl m-auto mt-6">
          <Swiper
            :slidesPerView="5"
            :spaceBetween="20"
            :navigation="true"
            :pagination="{
              clickable: true,
            }"
            :mousewheel="true"
            :keyboard="true"
            class="mySwiper"
          >
            <SwiperSlide
              v-for="item in dataGameCasino"
              :key="item.id"
              class="flex-col items-center flex justify-center"
            >
              <div class="relative flex-col items-center flex justify-center">
                <img
                  :src="getImagePosterGame(item.providerName)"
                  alt=""
                  srcset=""
                  class="w-36 h-44 rounded-lg"
                />
                <div
                  class="flex-col items-center flex justify-center w-full h-full hover:opacity-100 opacity-0 absolute bg-hover"
                >
                  <UButton
                    icon="i-simple-line-icons-control-play"
                    size="2xs"
                    class="text-sm w-18 h-18 text-white m-auto btn btn-blue"
                    @click="handleButtonClick"
                  >
                    เข้าเกม
                  </UButton>
                </div>
              </div>
              <p class="mt-1 text-sm">{{ item.providerName }}</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </template>
    <template>
      <section class="h-80 mt-16">
        <div class="flex justify-between max-w-4xl h-10 m-auto">
          <p class="flex items-center">เกมสล็อต</p>
          <div class="flex">
            <NuxtLink to="/_lang/slot" class="flex justify-center">
              <UButton class="justify-center rounded-full w-32"
                >ดูทั้งหมด</UButton
              >
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-between max-w-4xl m-auto mt-6">
          <Swiper
            :slidesPerView="5"
            :spaceBetween="20"
            :navigation="true"
            :pagination="{
              clickable: true,
            }"
            :mousewheel="true"
            :keyboard="true"
            class="mySwiper"
          >
            <SwiperSlide
              v-for="item in dataGameSlot"
              :key="item.id"
              class="flex-col items-center flex justify-center"
            >
              <div class="relative flex-col items-center flex justify-center">
                <img
                  :src="getImagePosterGame(item.providerName)"
                  alt=""
                  srcset=""
                  class="w-36 h-44 rounded-lg"
                />
                <div
                  class="flex-col items-center flex justify-center w-full h-full hover:opacity-100 opacity-0 absolute bg-hover"
                >
                  <UButton
                    icon="i-simple-line-icons-control-play"
                    size="2xs"
                    class="text-sm w-18 h-18 text-white m-auto btn btn-blue"
                    @click="handleButtonClick"
                  >
                    เข้าเกม
                  </UButton>
                </div>
              </div>
              <p class="mt-1 text-sm">{{ item.providerName }}</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </template>
    <template>
      <section class="h-80 mt-16">
        <div class="flex justify-between max-w-4xl h-10 m-auto">
          <p class="flex items-center">หวยออนไลน์</p>
          <div class="flex">
            <NuxtLink to="/_lang/lotto" class="flex justify-center">
              <UButton class="justify-center rounded-full w-32"
                >ดูทั้งหมด</UButton
              >
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-between max-w-4xl m-auto mt-6">
          <span
            v-for="item in dataGameLotto"
            :key="item.id"
            class="flex-col items-center flex justify-center"
          >
            <div class="relative flex-col items-center flex justify-center">
              <img
                :src="getImagePosterGame(item.providerName)"
                alt=""
                srcset=""
                class="w-36 h-44 rounded-lg"
              />
              <div
                class="flex-col items-center flex justify-center w-full h-full hover:opacity-100 opacity-0 absolute bg-hover"
              >
                <UButton
                  icon="i-simple-line-icons-control-play"
                  color="black"
                  size="2xs"
                  class="text-sm w-18 h-18 text-white m-auto btn btn-blue"
                  @click="handleButtonClick"
                >
                  เข้าเกม
                </UButton>
              </div>
            </div>
            <p class="mt-1">{{ item.providerName }}</p>
          </span>
        </div>
      </section>
    </template>
  </main>
</template>
<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}

.bg-hover {
  background-color: rgb(0, 0, 0, 0.7);
}
</style>
