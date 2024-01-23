<script lang="ts" setup>
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
// import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import SwiperCore, { Navigation, Pagination } from "swiper/core"; // เพิ่มการนำเข้า SwiperCore และ Pagination

SwiperCore.use([Navigation, Pagination]); // นำเข้า Pagination เพื่อให้ Swiper ใช้งาน

const { data: dataGameSport } = await getResultDataGameSport();
const { data: dataGameHits } = await getResultDataGameHits();
const { data: dataGameCasino } = await getResultDataGameCasino();
const { data: dataGameSlot } = await getResultDataGameSlot();
const { data: dataGameLotto } = await getResultDataGameLotto();
// const { data: dataGameSport } = await getResultDataGameSport();
console.log(dataGameHits.value);
console.log(dataGameSlot);
// สร้าง computed property ที่คัดกรองข้อมูลเพื่อให้แสดงเพียง 5 ไอเทม
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
            <img
              :src="item.image"
              alt=""
              srcset=""
              class="w-36 h-44 rounded-lg"
            />
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
              <UButton class="justify-center rounded-full w-32"
                >ดูทั้งหมด</UButton
              >
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
            :Navigation="true"
            class="mySwiper"
          >
            <SwiperSlide
              v-for="item in dataGameSport"
              :key="item.id"
              class="flex-col items-center flex justify-center"
            >
              <img
                :src="getImagePosterGame(item.providerName)"
                alt=""
                srcset=""
                class="w-36 h-44 rounded-lg"
              />
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
                class="w-36 h-44 rounded-lg"
              />
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
            :spaceBetween="30"
            :pagination="{
              clickable: true,
            }"
            :Navigation="true"
            class="mySwiper"
          >
            <SwiperSlide
              v-for="item in dataGameSlot"
              :key="item.id"
              class="flex-col items-center flex justify-center"
            >
              <img
                :src="getImagePosterGame(item.providerName)"
                alt=""
                srcset=""
                class="w-36 h-44 rounded-lg"
              />
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
            <img
              :src="getImagePosterGame(item.providerName)"
              alt=""
              srcset=""
              class="w-36 h-44 rounded-lg"
            />
            <p class="mt-1">{{ item.providerName }}</p>
          </span>
        </div>
      </section>
    </template>
  </main>
</template>
